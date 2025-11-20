import Chat from "./pages/Chat/Chat"
import Home from "./pages/Home/Home"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router"
import { ChatProvider } from "./providers/ChatProviders"
import { Slide, ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={700}
        hideProgressBar
        limit={2}
        closeButton={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="none"
        transition={Slide}
      />
      <ChatProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </ChatProvider>
    </>
  )
}

export default App
