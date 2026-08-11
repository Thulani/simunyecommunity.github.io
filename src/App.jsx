import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Gallery from './pages/Gallery'
import News from './pages/News'
import NewsPost from './pages/NewsPost'
import EducationCentre from './pages/EducationCentre'
import CorporateHub from './pages/CorporateHub'
import WellnessPost from './pages/WellnessPost'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center py-32 px-4 text-center flex-1">
      <h1 className="text-6xl mb-4" style={{ color: '#ECEEE7', fontFamily: "'Archivo Black', sans-serif" }}>404</h1>
      <h2 className="text-2xl mb-4" style={{ color: '#10131A' }}>Page not found.</h2>
      <p className="mb-8" style={{ color: '#565F6E' }}>The page you're looking for doesn't exist.</p>
      <a href="#/" className="px-6 py-3 text-sm font-bold rounded-full text-white" style={{ background: '#2540E8' }}>
        Go home
      </a>
    </main>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsPost />} />
            <Route path="/education" element={<EducationCentre />} />
            <Route path="/corporate-hub" element={<CorporateHub />} />
            <Route path="/corporate-hub/wellness/:slug" element={<WellnessPost />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}
