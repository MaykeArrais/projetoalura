function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa || campoPesquisa == " "){
        section.innerHTML = "<h2 class='aviso'>Nenhum resultado encontrado! Nenhuma palavra foi digitada</h2>";
        return;
    }
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada item do array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        
        if (titulo.includes(campoPesquisa.toLowerCase()) || descricao.includes(campoPesquisa.toLowerCase())){
            // Constrói o HTML para cada resultado, usando template literals
            resultados += `
                <div class="item-resultado">
                    <div class="texto">
                        <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href=${dado.link} target="_blank">Mais Informações</a>
                    </div>
                    <img src=${dado.imagem} alt=${dado.alt}>
                </div>
            `;
        }

        if (!resultados){
            resultados = "<h2>Nenhum resultado encontrado</h2>";
        }
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }