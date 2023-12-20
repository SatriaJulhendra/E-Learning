import{ Routes, Route}  from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


import HomePage from './Pages/HomePage'
import Kalaspage from './Pages/Kelaspage'
import TestimonialPage from './Pages/TestimonialPage'
import FaqPage from './Pages/FaqPage'
import SyaratDanKetentuan from './Pages/SyaratDanKetentuan'


function App() {

  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<Kalaspage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/syaratketen" element={<SyaratDanKetentuan />} />

      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
