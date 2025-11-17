import Chat from "./pages/Chat/Chat"
import Home from "./pages/Home/Home"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router"
import { ChatProvider } from "./providers/ChatProviders"

function App() {

  return (
    <>
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
