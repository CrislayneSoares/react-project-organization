import Projects from '../projects/Projects'
import Dash from '../dash/Dash'
import {Routes, Route} from 'react-router-dom'
import './Style.sass'

export default function ComponenteLDireito() {
    return (
        <section className='container__direito'>
            <div>
                    <div>
                        <Routes>
                            <Route path='/profile'/>
                            <Route path='/setting'/>
                            <Route path='/dash' element={<Dash/>} />
                            <Route className='container__nav-button' path='/projects' element={<Projects/>}/>
                        </Routes>
                    </div>
            </div>
        </section>
    )
}