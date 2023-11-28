import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
// import Body from './components/Body/body'
import Calculator from './components/calculator/calculator'
import Donation from './components/Donation/donation'
import Intro from './components/Intro/intro'
export default function Home() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Calculator/>
    <Donation/>
    <Footer/>
    </>
  )
}
