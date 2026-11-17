

// FILMES INICIAIS

let filmes = [
    {
        titulo: "Interestelar",
        genero: "Ficção científica",
        nota: 10,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Titanic",
        genero: "Romance",
        nota: 9,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Coraline",
        genero: "Fantasia",
        nota: 8.5,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "Invocação do Mal",
        genero: "Terror",
        nota: 9,
        status: "Quero assistir",
        favorito: false
    },
    {
        titulo: "As Branquelas",
        genero: "Comédia",
        nota: 8,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "A Origem",
        genero: "Ficção científica",
        nota: 9.5,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        genero: "Fantasia",
        nota: 9,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Meninas Malvadas",
        genero: "Comédia",
        nota: 8.5,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "O Diário da Princesa",
        genero: "Romance",
        nota: 8,
        status: "Quero assistir",
        favorito: false
    },
    {
        titulo: "A Culpa é das Estrelas",
        genero: "Drama",
        nota: 9,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "Avatar",
        genero: "Ficção científica",
        nota: 9,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Pantera Negra",
        genero: "Ação",
        nota: 8.5,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "Homem-Aranha: Sem Volta Para Casa",
        genero: "Ação",
        nota: 9.5,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "A Noiva Cadáver",
        genero: "Fantasia",
        nota: 8.5,
        status: "Quero assistir",
        favorito: false
    },
    {
        titulo: "Extraordinário",
        genero: "Drama",
        nota: 9.5,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Gente Grande",
        genero: "Comédia",
        nota: 8,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "A Freira",
        genero: "Terror",
        nota: 7.5,
        status: "Quero assistir",
        favorito: false
    },
    {
        titulo: "Orgulho e Preconceito",
        genero: "Romance",
        nota: 9.5,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Jurassic Park",
        genero: "Ação",
        nota: 9,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "Divertida Mente",
        genero: "Comédia",
        nota: 9,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "O Castelo Animado",
        genero: "Fantasia",
        nota: 9.5,
        status: "Quero assistir",
        favorito: false
    },
    {
        titulo: "Um Lugar Silencioso",
        genero: "Terror",
        nota: 8.5,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "La La Land",
        genero: "Romance",
        nota: 9,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Oppenheimer",
        genero: "Drama",
        nota: 9.5,
        status: "Quero assistir",
        favorito: false
    },
    {
        titulo: "Guardiões da Galáxia",
        genero: "Ação",
        nota: 9,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "WALL-E",
        genero: "Ficção científica",
        nota: 9.5,
        status: "Assistido",
        favorito: true
    },
    {
        titulo: "Sexta-Feira Muito Louca",
        genero: "Comédia",
        nota: 8.5,
        status: "Quero assistir",
        favorito: false
    },
    {
        titulo: "Edward Mãos de Tesoura",
        genero: "Fantasia",
        nota: 9,
        status: "Assistido",
        favorito: false
    },
    {
        titulo: "Jogos Vorazes",
        genero: "Ação",
        nota: 9,
        status: "Quero assistir",
        favorito: true
    },
    {
        titulo: "O Exorcista",
        genero: "Terror",
        nota: 8,
        status: "Quero assistir",
        favorito: false
    }
];


// ELEMENTOS DO HTML

const listaFilmes = document.querySelector("#lista-filmes");
const listaFavoritos = document.querySelector("#lista-favoritos");

const totalFilmes = document.querySelector("#total-filmes");
const totalAssistidos = document.querySelector("#total-assistidos");
const mediaNotas = document.querySelector("#media-notas");
const totalFavoritos = document.querySelector("#total-favoritos");

const busca = document.querySelector("#busca");
const filtroGenero = document.querySelector("#filtro-genero");
const filtroStatus = document.querySelector("#filtro-status");

const formulario = document.querySelector("#form-filme");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

const botaoFavoritos = document.querySelector("#botao-favoritos");

let somenteFavoritos = false;


// FUNÇÃO PARA CRIAR OS CARDS

function criarCard(filme) {

    const card = document.createElement("div");
    card.classList.add("filme");

    const titulo = document.createElement("h3");
    titulo.textContent = filme.titulo;

    const genero = document.createElement("p");
    genero.textContent = "Gênero: " + filme.genero;

    const nota = document.createElement("p");
    nota.textContent = "Nota: " + filme.nota + "/10";
    nota.classList.add("nota-filme");

    const estrelas = document.createElement("div");
    estrelas.classList.add("estrelas");

    let quantidadeEstrelas = Math.round(filme.nota / 2);
    let textoEstrelas = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= quantidadeEstrelas) {
            textoEstrelas += "★";
        } else {
            textoEstrelas += "☆";
        }

    }

    estrelas.textContent = textoEstrelas;

    const status = document.createElement("span");
    status.textContent = filme.status;
    status.classList.add("status");

    if (filme.status === "Quero assistir") {
        status.classList.add("status-pendente");
    }

    const acoes = document.createElement("div");
    acoes.classList.add("acoes-filme");

    // BOTÃO DE FAVORITO

    const botaoCoracao = document.createElement("button");
    botaoCoracao.textContent = filme.favorito ? "♥" : "♡";
    botaoCoracao.classList.add("botao-coracao");
    botaoCoracao.type = "button";
    botaoCoracao.title = "Adicionar ou remover dos favoritos";

    botaoCoracao.addEventListener("click", function() {

        filme.favorito = !filme.favorito;

        filtrarFilmes();
        atualizarResumo();

    });

    // BOTÃO DE STATUS

    const botaoStatus = document.createElement("button");
    botaoStatus.textContent = "Alterar status";
    botaoStatus.classList.add("botao-status");
    botaoStatus.type = "button";

    botaoStatus.addEventListener("click", function() {

        if (filme.status === "Assistido") {
            filme.status = "Quero assistir";
        } else {
            filme.status = "Assistido";
        }

        filtrarFilmes();
        atualizarResumo();

    });

    // BOTÃO DE REMOVER

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("botao-remover");
    botaoRemover.type = "button";

    botaoRemover.addEventListener("click", function() {

        filmes = filmes.filter(function(item) {
            return item !== filme;
        });

        filtrarFilmes();
        atualizarResumo();

    });

    acoes.appendChild(botaoCoracao);
    acoes.appendChild(botaoStatus);
    acoes.appendChild(botaoRemover);

    card.appendChild(titulo);
    card.appendChild(genero);
    card.appendChild(nota);
    card.appendChild(estrelas);
    card.appendChild(status);
    card.appendChild(acoes);

    card.addEventListener("mouseenter", function() {
        card.style.borderColor = "#f472b6";
    });

    return card;
}


// FUNÇÃO PARA MOSTRAR OS FILMES

function mostrarFilmes(lista) {

    listaFilmes.textContent = "";

    if (lista.length === 0) {
        document.querySelector("#lista-vazia").style.display = "block";
    } else {
        document.querySelector("#lista-vazia").style.display = "none";
    }

    for (let filme of lista) {

        const card = criarCard(filme);

        listaFilmes.appendChild(card);

    }

}


// FUNÇÃO PARA MOSTRAR OS FAVORITOS

function mostrarFavoritos() {

    listaFavoritos.textContent = "";

    let favoritos = filmes.filter(function(filme) {
        return filme.favorito === true;
    });

    if (favoritos.length === 0) {
        document.querySelector("#favoritos-vazios").style.display = "block";
    } else {
        document.querySelector("#favoritos-vazios").style.display = "none";
    }

    for (let filme of favoritos) {

        const card = criarCard(filme);

        listaFavoritos.appendChild(card);

    }

}


// FUNÇÃO PARA FILTRAR OS FILMES

function filtrarFilmes() {

    const textoBusca = busca.value.toLowerCase();
    const generoEscolhido = filtroGenero.value;
    const statusEscolhido = filtroStatus.value;

    const filmesFiltrados = filmes.filter(function(filme) {

        const nomeCombina = filme.titulo.toLowerCase().includes(textoBusca);

        const generoCombina = generoEscolhido === "" || filme.genero === generoEscolhido;

        const statusCombina = statusEscolhido === "" || filme.status === statusEscolhido;

        const favoritoCombina = !somenteFavoritos || filme.favorito === true;

        return nomeCombina && generoCombina && statusCombina && favoritoCombina;

    });

    mostrarFilmes(filmesFiltrados);
    mostrarFavoritos();

}


// FUNÇÃO PARA ATUALIZAR AS ESTATÍSTICAS

function atualizarResumo() {

    const quantidade = filmes.length;

    const assistidos = filmes.reduce(function(total, filme) {

        if (filme.status === "Assistido") {
            return total + 1;
        } else {
            return total;
        }

    }, 0);

    const somaNotas = filmes.reduce(function(total, filme) {
        return total + filme.nota;
    }, 0);

    const favoritos = filmes.filter(function(filme) {
        return filme.favorito === true;
    });

    let media = 0;
    let porcentagem = 0;

    if (quantidade > 0) {
        media = somaNotas / quantidade;
        porcentagem = (assistidos / quantidade) * 100;
    }

    totalFilmes.textContent = quantidade;
    totalAssistidos.textContent = assistidos;
    mediaNotas.textContent = media.toFixed(1);
    totalFavoritos.textContent = favoritos.length;

    // ATUALIZAR BARRA DE PROGRESSO

    document.querySelector("#barra-progresso").style.width = porcentagem + "%";

    document.querySelector("#porcentagem").textContent =
        porcentagem.toFixed(0) + "%";

    document.querySelector("#texto-progresso").textContent =
        assistidos + " de " + quantidade + " filmes assistidos.";

}


// ESCOLHA DO DIA

function mostrarDestaque() {

    const destaque = document.querySelector("#filme-destaque");

    destaque.textContent = "";

    if (filmes.length === 0) {

        const mensagem = document.createElement("p");
        mensagem.textContent = "Cadastre um filme para receber uma sugestão!";
        destaque.appendChild(mensagem);

    } else {

        let melhorFilme = filmes[0];

        for (let filme of filmes) {

            if (filme.nota > melhorFilme.nota) {
                melhorFilme = filme;
            }

        }

        const informacoes = document.createElement("div");

        const titulo = document.createElement("h3");
        titulo.textContent = melhorFilme.titulo;

        const genero = document.createElement("p");
        genero.textContent = "Gênero: " + melhorFilme.genero;

        const nota = document.createElement("p");
        nota.textContent = "⭐ Nota: " + melhorFilme.nota + "/10";

        informacoes.appendChild(titulo);
        informacoes.appendChild(genero);
        informacoes.appendChild(nota);

        const icone = document.createElement("span");
        icone.textContent = "🍿";
        icone.classList.add("destaque-icone");

        destaque.appendChild(informacoes);
        destaque.appendChild(icone);

    }

}


// CADASTRAR FILMES

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensagemSucesso.textContent = "";

    const titulo = document.querySelector("#titulo").value.trim();
    const genero = document.querySelector("#genero").value;
    const notaTexto = document.querySelector("#nota").value.trim();
    const status = document.querySelector("#status").value;

    const nota = Number(notaTexto);

    let valido = true;

    // LIMPAR ERROS

    document.querySelector("#erro-titulo").textContent = "";
    document.querySelector("#erro-genero").textContent = "";
    document.querySelector("#erro-nota").textContent = "";
    document.querySelector("#erro-status").textContent = "";

    // VALIDAR NOME

    if (titulo === "") {
        document.querySelector("#erro-titulo").textContent =
            "Digite o nome do filme.";
        valido = false;
    }

    // VALIDAR GÊNERO

    if (genero === "") {
        document.querySelector("#erro-genero").textContent =
            "Selecione um gênero.";
        valido = false;
    }

    // VALIDAR NOTA

    if (notaTexto === "") {
        document.querySelector("#erro-nota").textContent =
            "Digite uma nota.";
        valido = false;
    } else if (nota < 0 || nota > 10) {
        document.querySelector("#erro-nota").textContent =
            "A nota deve ser entre 0 e 10.";
        valido = false;
    }

    // VALIDAR STATUS

    if (status === "") {
        document.querySelector("#erro-status").textContent =
            "Selecione um status.";
        valido = false;
    }

    // ADICIONAR FILME

    if (valido === true) {

        filmes.push({
            titulo: titulo,
            genero: genero,
            nota: nota,
            status: status,
            favorito: false
        });

        formulario.reset();

        mensagemSucesso.textContent =
            "Filme adicionado à sua coleção! 💜";

        filtrarFilmes();
        atualizarResumo();
        mostrarDestaque();

    }

});


// EVENTOS DOS FILTROS

busca.addEventListener("input", function() {
    filtrarFilmes();
});

filtroGenero.addEventListener("change", function() {
    filtrarFilmes();
});

filtroStatus.addEventListener("change", function() {
    filtrarFilmes();
});


// CATEGORIAS

const categorias = document.querySelectorAll(".categoria");

for (let categoria of categorias) {

    categoria.addEventListener("click", function() {

        filtroGenero.value = categoria.getAttribute("data-genero");

        for (let item of categorias) {
            item.classList.remove("ativa");
        }

        categoria.classList.add("ativa");

        somenteFavoritos = false;
        botaoFavoritos.classList.remove("ativo");

        filtrarFilmes();

    });

}


// FILTRAR FAVORITOS

botaoFavoritos.addEventListener("click", function() {

    somenteFavoritos = !somenteFavoritos;

    if (somenteFavoritos === true) {
        botaoFavoritos.classList.add("ativo");
    } else {
        botaoFavoritos.classList.remove("ativo");
    }

    filtrarFilmes();

});


// TECLA ESCAPE PARA LIMPAR FILTROS

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        busca.value = "";
        filtroGenero.value = "";
        filtroStatus.value = "";

        somenteFavoritos = false;
        botaoFavoritos.classList.remove("ativo");

        for (let categoria of categorias) {
            categoria.classList.remove("ativa");
        }

        categorias[0].classList.add("ativa");

        filtrarFilmes();

    }

});


// INICIAR O SITE

filtrarFilmes();
atualizarResumo();
mostrarDestaque();
