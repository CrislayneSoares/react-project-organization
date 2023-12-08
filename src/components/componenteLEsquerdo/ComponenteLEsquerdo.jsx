import './Style.sass'
import Comptools from '../comp_tools/Comptools'
import Search from '../search/Search'
import Progresso from '../compProgresso/Progresso'
import Message from '../mensagem/Message'

export default function ComponenteLEsquerdo() {
    return (
        <section className='container__esquerdo'> 
            <div className='container-menu'>
                <Comptools/>
            </div>

            <div className='container-projeto'>
                <div className='comp-pesquisa'>
                    <Search/>
                </div>

                <div className='comp-progresso'>
                    <Progresso/>

                    <div className='message'>
                        <Message/>
                    </div>
                </div>

            </div>

        </section>
    )
}