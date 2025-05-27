// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import MainPage from './pages/Main/MainPage'
import LibraryPage from './pages/Main/LibraryPage'
import CustomPage from './pages/Main/CustomPage'
import ContactPage from './pages/Main/ContactPage'

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
    <div className="fixed top-0 left-0 w-full flex z-50">
      <Header />
    </div>


      <main className="min-h-[80vh] pt-20 p-2">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/libraryPage" element={<LibraryPage />} />
          <Route path="/customPage" element={<CustomPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
