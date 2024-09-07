function pesquisar() {
    
let section = document.getElementById("resultado")

let pesquisaCampo = document.getElementById("pesquisa_campo").value

if (pesquisaCampo == "") {
    section.innerHTML = "<p>Você deve digitar a busca de interesse</p>"
    return
}

pesquisaCampo = pesquisaCampo.toLowerCase()

let resultado = ""
let titulo = ""
let cor = ""
let tags = ""

for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    cor = dado.cor.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (titulo.includes(pesquisaCampo) || cor.includes(pesquisaCampo) || tags.includes(pesquisaCampo)) {

    resultado += `
        <h2 class="titulo_resultado">${dado.titulo}</h2>
            <div class="item_resultado">
                <p>${dado.descricao}</p>
                <h4>Características</h4>
                <ul>
                    <li><strong>Forma:</strong> ${dado.forma}</li>
                    <li><strong>Metabolismo:</strong> ${dado.metabolismo}</li>
                    <li><strong>Coloração:</strong> ${dado.cor}</li>
                </ul>
                <h4>Doenças</h4>
                <ul>
                    <li>${dado.d1}</li>
                    <li>${dado.d2}</li>
                    <li>${dado.d3}</li>
                    <li>${dado.d4}</li>
                </ul>
                <h4>Grupos de risco</h4>
                <ul>
                    <li>${dado.risco}</li>
                </ul>
            </div>
` }
} 

    if (!resultado) {
        resultado = "<p>Busca não encontrada :(</p>"
    }

    section.innerHTML = resultado;
}

