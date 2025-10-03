import Navbar from "../../Components/Navbar/Navbar"
import Hero from './Components/Hero'
import About from "./Components/About"
import Service from "./Components/Service"
import CallToAction from "./Components/CallToAction"
import Faq from "./Components/Faq"
import Footer from "../../Components/Footer/Footer"

import "../Home/HomeStyles.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About heading="About us"/>
      <Service/>
      <CallToAction/>
      <Faq/>
      <Footer/>

    </div>
  )
}

export default Home