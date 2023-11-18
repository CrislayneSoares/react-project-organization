import ComponenteLDireito from "./components/componenteLDireito/ComponenteLDireito"
import ComponenteLEsquerdo from "./components/componenteLEsquerdo/ComponenteLEsquerdo"
import './StyleGlobal.sass'

function App() {
  return (
    <main>
      <ComponenteLEsquerdo/>
      <ComponenteLDireito/>
    </main>
  )
}

export default App
