


import React, { useState } from "react"


export default function Posts() {


  const [post, setPost] = useState("bookmark-outline")
  const [likes, setLike] = useState("heart-outline")
  const [redLike, setRed] = useState("")



  const otimizacao = [

    { user: "meowed", imagem: "assets/img/meowed.svg", imagem2: "assets/img/gato-telefone.svg", imagem3: "assets/img/respondeai.svg", curtida: "Curtido por respondeai e outras 101.523 pessoas" },
    { user: "barked", imagem: "assets/img/barked.svg", imagem2: "assets/img/dog.svg", imagem3: "assets/img/respondeai.svg", curtida: "Curtido por adorable_animals e outras 99.159 pessoas" }
  ]



  return (
    <div>
      {otimizacao.map((otim) =>
        <div>
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={otim.imagem} />
                {otim.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>


            <div class="conteudo">
              <img name={likes} onClick={() => likes === "heart-outline" ? setLike("heart") : setLike("heart-outline")}src={otim.imagem2} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                <ion-icon name={likes} onClick={() => likes === "heart-outline" ? setLike ("heart") : setLike("heart-outline")}> </ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={post} onClick={() => post === "bookmark-outline" ? setPost("bookmark") : setPost("bookmark-outline")}> </ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={otim.imagem3} />
                <div class="texto">
                  {otim.curtida}
                </div>
              </div>
            </div>
          </div>

        </div>)}
    </div>
  )

      }

 