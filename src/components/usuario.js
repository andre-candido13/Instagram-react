
import React from "react"


export default function Usuario() {
  return (

    <User texto2 texto="catanacomics" imagem />

  )

}

function User(props) {

  const [texto2, settexto2] = React.useState("Catana");
  const [imagem, setimagem] = React.useState("./assets/img/catanacomics.svg");


  function trocarNome() {
    const mudarNome = prompt("Altere o nome")
    settexto2(mudarNome)
  }

  function trocarFoto() {
    const mudarFoto = prompt("Digite o link da nova foto:")
    setimagem(mudarFoto)

  }


  return (

    <div class="usuario">
      <img onClick={trocarFoto} src={imagem} />
      <div class="texto">
        <strong>{props.texto}</strong>
        <span> {texto2}
          <ion-icon onClick={trocarNome} name="pencil"> </ion-icon> </span>

      </div>
    </div>
  )

}