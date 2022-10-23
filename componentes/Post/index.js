import './Post.css'
import Perfil from './img/ftproa2.jpeg'
import Libas from './img/liberdade.jpg'
import { FiMoreVertical } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext, icons } from 'react-icons/lib'
import { BsEmojiSmile } from 'react-icons/bs'
export function Post() {
    return (

        <div>
            <header>
                <div className="infosPost">
                    <img src={Perfil} />
                    <p>Marquinhos</p> 
                </div>
                <FiMoreVertical />
            </header>
            <div className='imgPost'>
                <img src={Libas} />
            </div>
            <div className='footerPost'>
                <IconContext.Provider value={{ size: '23px' }}>
                    <section className='iconsPost'>
                        <div className='Icons'>
                            <div className='icon'><AiOutlineHeart /></div>
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>
                        <div className='icon'><BsBookmark /></div>
                    </section>
                </IconContext.Provider>
                <section className='Like'>
                    <span>61 curtidas</span>
                </section>
                <div className='legenda'>
                    <p>
                        <strong>Marquinhos:</strong> Foto da Liberdade e sua beleza
                    </p>
                </div>
                <div className='time'>
                    <time> HÁ 45 MINUTOS</time>
                </div>
                <div className='coments'>
                    <div className='fakeComent'>
                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className='icon'>
                            <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário'/>
                    </div>
                    <button className='bot'>Publicar</button>
                </div>
            </div>
        </div >

    )
}