const moeda = document.getElementById("moeda_clicavel")
let mostrar_moedas = document.getElementById("mostrar_moedas")
let paragrafo_10 = document.getElementById("top_10")

function atualizarTabela() {
    fetch('http://127.0.0.1:5000/top10')

    .then(response => response.json())

    .then(data => {
        paragrafo_10.innerHTML = ""
        data.forEach((usuario, indice) => {
            if (usuario.nome === usuario_logado) {
                paragrafo_10.innerHTML += ` 👉 ${indice + 1}º - ${usuario.nome} -> $${usuario.dinheiro} 👈 <br>`
            }
            else {
                paragrafo_10.innerHTML += `${indice + 1}º - ${usuario.nome} -> $${usuario.dinheiro}<br>`
            }
        });
    })

    .catch(error => console.log(error));
}


moeda.addEventListener("click", () => {
    fetch('http://127.0.0.1:5000/clique', {
    
        method: 'POST'
    
    })
    
        .then(response => response.json())
    
        .then(data => {
            mostrar_moedas.innerHTML = data.dinheiro
            atualizarTabela()
        })
    
})

setInterval(atualizarTabela, 2000)

atualizarTabela()