
import Stories from "./stories"
import Posts from "./posts"
import SideBar from "./sideBar"

export default function Corpo() {
    return (


        <div class="corpo">
            <div class="esquerda">
                <Stories></Stories>
                <Posts></Posts>
            </div>
            <SideBar></SideBar>
        </div>


    )
}