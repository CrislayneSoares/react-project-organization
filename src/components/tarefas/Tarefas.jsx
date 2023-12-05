import './Style.sass'

export default function Tarefas() {
    return (
        <section className='container__tarefa'>
            <div className='container__titulo'>
                <h2>Título da tarefa</h2>
                <p>Descrição da tarefa</p>
            </div>
            
            <div className='container__assigned'>
                <figure>
                    <img src="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg" alt="perfil" />
                    <img src="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg" alt="perfil" />
                </figure>
            </div>

            <div className='container__status'>
                <span className='style_status'>EARLY</span>
            </div>
            
            <div className='container__date'>
                <p>30th Octuber, 2023</p>
                <p>in 10 days</p>
            </div>
        </section>
    )
}