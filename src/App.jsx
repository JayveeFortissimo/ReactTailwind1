import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
function App() {

  return (
    <>

    <Header className="flex justify-center items-center h-24 sticky top-0"/> 
<Section className="flex justify-center items-center flex-wrap min-h-vh-custom 2xl:gap-96 xl:gap-96 lg:gap-56"/>
    <Footer />
    
    </>
  )
}

export default App
