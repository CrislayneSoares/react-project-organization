import './Style.sass'

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
                    <a href=""> <img src={profile} alt="perfil" /></a>
                </figure>

                <figure className='img-tools'>
                    <a href=""><img src={dashboard} alt="dashboard" /></a>
                    <figcaption>
                        Dashboard
                    </figcaption>
                </figure>

                <figure className='img-tools'>
                    <a href=""><img src={project} alt="projeto" /></a> 
                    <figcaption>
                        Projects
                    </figcaption>
                </figure>

                <figure className='img-tools'>
                    <a href=""><img src={setting} alt="config" /></a>
                    <figcaption>
                        Settings
                    </figcaption>
                </figure>

            </div>
            
        </section>
    )
}