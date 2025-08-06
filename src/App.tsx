import Chat from "./pages/Chat/Chat"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
