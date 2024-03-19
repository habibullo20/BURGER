
import { About } from "./components/about/about"
import Features from "./components/features/features"
import Header from "./components/header/header"
import Hero from "./components/hero/hero"

function App() {
  

  return (
    <>
      <Header/>
      <Hero/>
     <main>
      <Features/>
         <About/>
       </main> 
    </>
  )
}

export default App
