# Game: 3D shooting game (FPS)

# Tech:
- **Client:** <br>
React TS with Vite <br>
React Three Fiber <br>
- **Server:** <br>
NestJs <br>
MongoDB <br>


# Self's learning:
## Client initializing:
<a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project">link docs vite</a> <br>
<a href="https://www.youtube.com/watch?v=zYr9HBojBaQ&t=216s">cra vs vite</a> <br>
**cmd**: <br>
`yarn create vite client --template react-ts` <br>or<br>
`npm create vite@latest client --template react-ts`
<br>
**then:**
- cd client
- npm install
- npm run dev <br>

**Client pattern:**
- Container (smart) & Presentation (dumb)
- Code splitting (lazy)
- index file for easier importing
- error boundary and fallback ui
- HOC / render props

## Tutorial & Reference:
<a href="http://thaunguyen.com/blog/reactjs/reactjs-code-splitting-la-gi">Code splitting</a> <br>
<a href="https://reactjs.org/docs/code-splitting.html">Code splitting</a> <br>
<a href="https://reactjs.org/docs/error-boundaries.html">Error boundary</a> <br>
<a href="https://www.youtube.com/watch?v=hszc3T0hdvU">Error boundary</a> <br>
<a href="https://www.npmjs.com/package/react-error-boundary">Error boundary - lib</a> <br>