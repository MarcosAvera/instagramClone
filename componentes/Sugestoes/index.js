import './style.css'
import Perfil from './img/ftproa2.jpeg'
import Todo from './img/Todo.jpg'
import Baku from './img/Baku.jpg'
export function Sugestoes() {
    return (
        <>
            <div className='headerSugs'>
                <img src={Perfil} />
                <div className='userInfosSugs'>
                    <div className='infos'>
                        <span>Marquinhos</span>
                        <p>Marcos Aquino</p>
                    </div>
                    <button className='switch'>Mudar</button>
                </div>
            </div>

            <div className='headerMainSugs'>
                <p> Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='userSugs'>
                <div className='informacoesSugs'>
                    <img src={Todo} />
                    <div className='dadosSugs'>
                        <span>Todoroki</span>
                        <p>Seguido por Susi</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>

                <div className='informacoesSugs'>
                    <img src={Baku} />
                    <div className='dadosSugs'>
                        <span>Todoroki</span>
                        <p>Seguido por Susi</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>

            <footer className='footerSugs'>
            <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

<p>&copy; 2021 INSTAGRAM FROM META</p>
            </footer>
        </>
    )
}