import { lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"

import Empty from './pages/Empty'
import Loading from './components/Loading'
import ErrorBoundaryLogger from './components/ErrorBoundary'

const Home = lazy(() => import('./pages/Home'))
const InGame = lazy(() => import('./pages/InGame'))

function App() {

  return (
    <div className="App">
      <ErrorBoundaryLogger>
        <Suspense fallback={
          <Empty>
            <Loading />
          </Empty>
        }>
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/match' element={ <InGame /> } />
          </Routes>
        </Suspense>
      </ErrorBoundaryLogger>
    </div>
  )
}

export default App
