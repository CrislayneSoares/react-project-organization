import './Style.sass'
import {Link} from 'react-router-dom'

export default function Comp_Tools(){
    const profile = 'src/assets/profile.png'
    const dashboard = 'src/assets/dashboard-white.png'
    const project = 'src/assets/project-management-white.png'
    const setting = 'src/assets/settings.png'

    return(
        <section className='container_tools'>

            <div className='logo'>
                <h1>SMART  STEP</h1>
            </div>

            <div className='tools'>

                <figure className='img-tools'>
                    <Link to={'/profile'}> <img src={profile} alt="perfil" /></Link>
                </figure>

                <figure className='img-tools'>
                    <Link to={'/dash'}><img src={dashboard} alt="dashboard" /></Link>
                    <figcaption>
                        Dashboard
                    </figcaption>
                </figure>

                <figure className='img-tools'>
                    <Link to={'/projects'}><img src={project} alt="projeto" /></Link> 
                    <figcaption>
                        Projects
                    </figcaption>
                </figure>

                <figure className='img-tools'>
                    <Link to={'/settings'}><img src={setting} alt="config" /></Link>
                    <figcaption>
                        Settings
                    </figcaption>
                </figure>
            </div>

            <div>
                
            </div>
            
        </section>
    )
}