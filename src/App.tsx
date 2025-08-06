import Footer from "./components/Footer"
import Chat from "./pages/Chat/Chat"
import Home from "./pages/Home/Home"
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
          <Route path="/" element={<Footer />} >
            <Route index element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
