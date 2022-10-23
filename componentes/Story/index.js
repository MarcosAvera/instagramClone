import './Story.css'
import Calo from './img/Calo.jpg'
import Samy from './img/Samy.jpg'
import Pedro from './img/Pedro.jpg'
import Leandro from './img/Leandro.jpg'
import Diogo from './img/Diogo.jpg'
import Erick from './img/Erick.jpg'
import Ana from './img/Ana.jpg'
import Susi from './img/Susi.jpg'
export function Story() {
    return (
        <div className="container">
            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Calo} />
                </div>
                <span>Vini Caló</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Samy} />
                </div>
                <span>Samy Oli</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Pedro} />
                </div>
                <span>Pedrinho</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Leandro} />
                </div>
                <span>Leandro</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Diogo} />
                </div>
                <span>Diogo Souza</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Erick} />
                </div>
                <span>Erick</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Ana} />
                </div>
                <span>Ana</span>
            </div>

            <div className="user-elements">
                <div>
                    <img className='imgUserStory' src={Susi} />
                </div>
                <span>Susi</span>
            </div>
        </div>
    )
}