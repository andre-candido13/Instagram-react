


import React, { useState } from "react"


const otimizacao = [

  { user: "meowed", imagem: "assets/img/meowed.svg", imagem2: "assets/img/gato-telefone.svg", imagem3: "assets/img/respondeai.svg", quemCurtiu:"respondeai", curtida: 101,},
  { user: "barked", imagem: "assets/img/barked.svg", imagem2: "assets/img/dog.svg", imagem3: "assets/img/adorable_animals.svg", quemCurtiu: "adorable_animals", curtida: 99,}
  
]


export default function Posts(props) {


  const [post, setPost] = useState("bookmark-outline")
  const [likes, setLikes] = useState("heart-outline")
  const [countLike, setCountLike] = useState(370)



  function curtidas () {
    likes === "heart-outline" ? setLikes("heart") : setLikes("heart-outline")
    likes === "heart-outline" ? setCountLike(371): setCountLike(370) 
  }
    

  return (
    <div data-test="post">
      {otimizacao.map((props) =>
        <div>
          <div class="post" >
            <div class="topo">
              <div class="usuario">
                <img data-test="post" src={props.imagem} />
                {props.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>


            <div class="conteudo">
              <img data-test="like-post" name={likes} onClick={curtidas} class={likes}src={props.imagem2} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                <ion-icon name={likes} onClick={curtidas} class={likes}> </ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" name={post} onClick={() => post === "bookmark-outline" ? setPost("bookmark") : setPost("bookmark-outline")}> </ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagem3} />
                <div class="texto">
                  Curtido por <strong> {props.quemCurtiu} </strong> e 
                   <strong data-test="likes-number"> outras {countLike} pessoas </strong>
                </div>
              </div>
            </div>
          </div>

        </div>)}
    </div>
  )

      }
      

 