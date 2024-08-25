import { Provider } from "react-redux"
import { Container, GlobalStyle } from "./styles"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './pages/Home'
import Register from "./pages/Register"

import store from "./store"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
