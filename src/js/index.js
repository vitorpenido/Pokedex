/* 
    Quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi solecionado na listagem;

    Pra isso vamos ter que tablhar com dois elementos:
    1- Listagem
    2- Cartão do pokemon

    Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela;

    Vamos trabalhar com um evento de clique feito pelo usuario na listagem de pokemons;

    - remover a classe aberto so do cartao que esta aberto
    - ao clicar em um pokemon da listagem pegamos o id do pokemon para saber qual cartao mostrar;
    - remover a classe ativa que marca o pokemon selecionado;
    - adcionar a classe ativo no item da lista selecionado;
*/


// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela;
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard  = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => { // criando uma função
   // Vamos trabalhar com um evento de clique feito pelo usuario na listagem de pokemons;

    pokemon.addEventListener('click', () => { // criando uma função a partir do clique 
        //- remover a classe aberto so do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto');
        
        //- ao clicar em um pokemon da listagem pegamos o id do pokemon para saber qual cartao mostrar;
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')


        //- remover a classe ativa que marca o pokemon selecionado;
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        
        //- adcionar a classe ativo no item da lista selecionado;
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
