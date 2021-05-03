import Header from "./components/header"
import Inspiration from "./components/inspiration"
import LeftView from "./components/leftView"
import RightView from "./components/rightView"
import CarouselSlide from "./components/carouselSlide"
import Features from "./components/features"
import Footer from "./components/footer"
import CallToAction from "./components/call-to-action"

function App() {
  return (
    <div className="App" id="container-fluid">
      <Header />
      <Inspiration />
      <LeftView />
      <CarouselSlide />
      <RightView />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
