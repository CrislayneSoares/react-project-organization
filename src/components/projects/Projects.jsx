import Progress from '../projeto-nav-bar/progress/Progress'
import Complete from '../projeto-nav-bar/complete/Complete'
import Draft from '../projeto-nav-bar/draft/Draft'
import { Link, Route, Routes } from 'react-router-dom'
import ButtonAdd from '../button/ButtonAdd'
import './Style.sass'

export default function Projects(){
    return(
       <div>
            <div className='container__nav-button'>
                <nav className='container__nav'>
                    <ul>
                        <li><Link to={'draft'}>DRAFT</Link></li>
                        <li><Link to={'progress'}>IN PROGRESS</Link></li>
                        <li><Link to={'complete'}>COMPLETE</Link></li>
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
                <Route path='draft' element={<Draft/>} />
                <Route path='progress' element={<Progress/>}/>
                <Route path='complete' element={<Complete/>}/>
            </Routes>
            </div>
       </div>

       
    )
}