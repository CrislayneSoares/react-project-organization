import ButtonAdd from '../button/ButtonAdd'
import ProjetoNavBar from '../projeto-nav-bar/ProjetoNavBar'
import './Style.sass'

export default function ComponenteLDireito() {
    return (
        <section className='container__direito'>
            <ProjetoNavBar/>
            <ButtonAdd/>
        </section>
    )
}