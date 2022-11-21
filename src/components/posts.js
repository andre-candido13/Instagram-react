


import React, { useState } from "react"


export default function Posts() {


  const [post, setPost] = useState("bookmark-outline")
  const [likes, setLike] = useState("heart-outline")
  const [redLike, setRed] = useState("heart")



  const otimizacao = [

    { user: "meowed", imagem: "assets/img/meowed.svg", imagem2: "assets/img/gato-telefone.svg", imagem3: "assets/img/respondeai.svg", curtida: "Curtido por respondeai e outras 101.523 pessoas" },
    { user: "barked", imagem: "assets/img/barked.svg", imagem2: "assets/img/dog.svg", imagem3: "assets/img/respondeai.svg", curtida: "Curtido por adorable_animals e outras 99.159 pessoas" }
  ]

  function teste () {
    if (likes==="heart-outline") {
      setLike("heart")
    } else {
      setLike("heart-outline")
    }
  }


  return (
    <div data-test="post" >
      {otimizacao.map((otim) =>
        <div>
          <div class="post" >
            <div class="topo">
              <div class="usuario">
                <img data-test="post" src={otim.imagem} />
                {otim.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>


            <div class="conteudo">
              <img data-test="like-post" name={likes} onClick={teste} class={likes}src={otim.imagem2} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                <ion-icon name={likes} onClick={teste} class={likes}> </ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" name={post} onClick={() => post === "bookmark-outline" ? setPost("bookmark") : setPost("bookmark-outline")}> </ion-icon>
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

 