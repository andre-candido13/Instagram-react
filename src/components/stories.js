

export default function Stories() {

  const otimizacao = [
    { imagem: "assets/img/9gag.svg", user: "9gag" },
    { imagem: "assets/img/meowed.svg", user: "meowed" },
    { imagem: "assets/img/barked.svg", user: "barked" },
    { imagem: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
    { imagem: "assets/img/wawawicomics.svg", user: "9wawawicomics" },
    { imagem: "assets/img/respondeai.svg", user: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", user: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }

  ]
  return (


    <div class="stories">

      {otimizacao.map((otim) =>

        <div class="story">
          <div class="imagem"> <img src={otim.imagem} /> </div>
          <div class="usuario"> {otim.user} </div>
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

      )}
     
    </div>
      
  )


}


