import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsPlusSquare} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import './style.css'
import { IconContext } from 'react-icons/lib'
import ftproa2 from './img/ftproa2.jpeg'
export function Header(){

    return(
        
        <header className="header">
        <div className="container">
            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        <div className = "input-fake">
            <IconContext.Provider value={{color: '8e8e8e'}}>
            <AiOutlineSearch />
            </IconContext.Provider>
            <input placeholder='Pesquisar' />
        </div>
        <div className='menuicons'>

        <IconContext.Provider value={{size: '23px'}}>
            <div className='icons'>
            <AiFillHome />
            </div>
            <div className='icons'>
            <RiMessengerLine />
            </div>
            <div className='icons'>
            <BsPlusSquare />
            </div>
            <div className='icons'>
            <MdOutlineExplore />
            </div>
            <div className='icons'>
            <FiHeart />
            </div>
        </IconContext.Provider>
        <img className='icons' src={ftproa2}></img>
         </div>
        </div>
     </header>
    )
    }