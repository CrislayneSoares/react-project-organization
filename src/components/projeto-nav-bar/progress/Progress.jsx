import Tarefas from '../../tarefas/Tarefas'
import './Style.sass'

export default function Progress() {
    return (
        <section className='container__progress'>
            <Tarefas/>
            <Tarefas/>
            <Tarefas/>
        </section>
    )
}