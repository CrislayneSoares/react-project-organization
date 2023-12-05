import ButtonAdd from '../button/ButtonAdd'
import ProjetoNavBar from '../projeto-nav-bar/ProjetoNavBar'
import Tarefas from '../tarefas/Tarefas'
import './Style.sass'

export default function ComponenteLDireito() {
    return (
        <section className='container__direito'>
            <div className='container__nav-button'>
                <ProjetoNavBar/>
                <ButtonAdd/>
            </div>

            <div className='container__header'>
                <p className='projects'>PROJECTS</p>
                <p>ASSIGNED TO</p>
                <p>STATUS</p>
                <p>DEADLINE</p>
            </div>

            <div>
                <Tarefas/>
                <Tarefas/>
            </div>
        </section>
    )
}