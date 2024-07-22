import About from "./components/About"
import Blog from "./components/Blog"
import Doctors from "./components/Doctors"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Services from "./components/Services"


function App() {
 

  return (
    
    <>
    <NavBar/>
    <main>
      <div id="home">
        <Home/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="doctors">
        <Doctors/>
      </div>
      <div id="blog">
        <Blog/>
      </div>
      
    </main>
    <div>
        <Footer/>
      </div>
    </>

  )
}

export default App
