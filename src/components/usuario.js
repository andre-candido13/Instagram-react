
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

    <div data-test="user" class="usuario">
      <img data-test="profile-image" onClick={trocarFoto} src={imagem} />
      <div class="texto">
        <strong data-test="name"> {props.texto}</strong>
        <span> {texto2}
          <ion-icon data-test="edit-name" onClick={trocarNome} name="pencil"> </ion-icon> </span>

      </div>
    </div>
  )

}