import ComponenteLDireito from "./components/componenteLDireito/ComponenteLDireito"
import ComponenteLEsquerdo from "./components/componenteLEsquerdo/ComponenteLEsquerdo"
import './StyleGlobal.sass'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main>
      <BrowserRouter>
        <ComponenteLEsquerdo/>
        <ComponenteLDireito/>
      </BrowserRouter>
    </main>
  )
}

export default App
