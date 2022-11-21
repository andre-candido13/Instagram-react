

export default function Sugestoes() {
  const otimizacao = [
    { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
    { imagem: "assets/img/chibirdart.svg", nome: "chibirdart" },
    { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals" },
    { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats" },


  ]

  return (
    <div>
      <div class="sugestoes">


        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {otimizacao.map((otim) =>
          <div class="sugestao">
            <div class="usuario">
              <img src={otim.imagem} />
              <div class="texto">
                <div class="nome">{otim.nome}</div>
                <div class="razao">Segue você</div>
              </div>
            </div>
            <div class="seguir">Seguir</div>
          </div>



        )}
      </div>
    </div>

  )
}