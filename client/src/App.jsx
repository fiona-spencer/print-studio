// Imports

// Pages
import Main from "./pages/Main"

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"

// Models



export default function App() {
  return (
    <>
      <div>
        <div>
          <Header/>
        </div>    
        <div>
          <Main/>
        </div>    
        <div>
          <Footer/>
        </div>   
      </div> 
    </>
  )
}
