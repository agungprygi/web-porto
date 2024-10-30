import Navbar from "./section/Navbar.jsx";
import Hero from "./section/Hero.jsx";
import About from "./section/About.jsx";
import Project from "./section/Project.jsx";
import Client from "./section/Client.jsx";
import Contact from "./section/Contact.jsx";


const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Client/>
      <Contact/>
    </main>
  )
}
export default App
