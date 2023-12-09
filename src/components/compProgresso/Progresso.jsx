import './Style.sass'

export default function Progresso(){
    return(
        <section className='box'>
           <div className='box-circle'>
                <svg>
                    <circle cx='80' cy='70' r='70' ></circle>
                    <circle cx='80' cy='70' r='70' ></circle>
                </svg>

                <div className='dados'>
                    <h2>71%</h2>
                    <p>New projects</p>
                </div>
           </div>
        </section>      
    )
}