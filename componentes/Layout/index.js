import './style.css'
import { Story } from '../Story'
import { Post } from '../Post'
import {Sugestoes} from '../Sugestoes'

export function Layout() {

    return (
        <>

            <div className="MainGrid" >
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box" >
                     <Story />
                    </div>

                    <div className="box" style={{ margin: "30px 0" }} >
                     <Post />
                    </div>
                </div>

                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                         <Sugestoes />
                    </div>
                </div>

            </div>

        </>
    )

}