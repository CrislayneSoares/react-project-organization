import ButtonAdd from '../button/ButtonAdd'
import Progress from '../projeto-nav-bar/progress/Progress'
import Complete from '../projeto-nav-bar/complete/Complete'
import Draft from '../projeto-nav-bar/draft/Draft'
import {Routes, Route, Link} from 'react-router-dom'
import './Style.sass'

export default function ComponenteLDireito() {
    return (
        <section className='container__direito'>
            <div className='container__nav-button'>
                <nav className='container__nav'>
                    <ul>
                        <li><Link to={'/draft'}>DRAFT</Link></li>
                        <li><Link to={'/progress'}>IN PROGRESS</Link></li>
                        <li><Link to={'/complete'}>COMPLETE</Link></li>
                    </ul>
                </nav>
                <ButtonAdd/>
            </div>

            <div className='container__header'>
                <p className='projects'>PROJECTS</p>
                <p>ASSIGNED TO</p>
                <p>STATUS</p>
                <p>DEADLINE</p>
            </div>

            <div>
            <Routes>
                <Route path='/complete' element={<Complete/>} />
                <Route path='/progress' element={<Progress/>} />
                <Route path='/draft' element={<Draft/>} />
            </Routes>
            </div>
        </section>
    )
}