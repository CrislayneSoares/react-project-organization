import Tarefas from '../../tarefas/Tarefas'
import './Style.sass'

export default function Draft() {
    return (
        <section className='container__draft'>
            <Tarefas/>
            <Tarefas/>
        </section>
    )
}