import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Error from "./pages/Error"


function App() {

  return (
      <div className="min-h-screen bg-gray-100">
          <NavBar />
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="*" element={<Error />} />
              </Routes>
          </Router>
          <footer className="bg-gray-600 fixed bottom-0 justify-between p-3 w-full text-white">
              <p>&copy;EnviroNZ 2022</p>
          </footer>
      </div>
  )
}

export default App
