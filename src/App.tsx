
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import BestSelling from './components/BestSelling'
import Productlar from './components/Productlar'
import Timer from './components/Timer'
import Trailer from './components/Trailer'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Header/>
     <Introduction/>
     <BestSelling/>
     <Productlar/>
     <Timer/>
     <Trailer/>
     <Feedback/>
     <Footer/>
    </>
  )
}

export default App
