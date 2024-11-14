import Navbar from "./section/Navbar.jsx";
import Hero from "./section/Hero.jsx";
import About from "./section/About.jsx";
import Project from "./section/Project.jsx";
import Client from "./section/Client.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";
import Experience from "./section/Experience.jsx";


const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Client/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  )
}
export default App
