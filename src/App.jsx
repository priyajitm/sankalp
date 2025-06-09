import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Admission from './pages/Admission'
import SpecialCurriculum from './pages/SpecialCurriculum'
import Gallery from './pages/Gallery'
import StudentCorner from './pages/StudentCorner'
import Contact from './pages/Contact'

function App() {
  // Use basename only in production builds (GitHub Pages)
  const basename = import.meta.env.PROD ? "/sankalp" : "";

  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/special-curriculum" element={<SpecialCurriculum />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/student-corner" element={<StudentCorner />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
