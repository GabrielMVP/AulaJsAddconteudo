let conteudoJs = document.createElement('h3');

conteudoJs.innerText = 'Desconto'

conteudoJs.id = 'oferta-js-produto'

let produtoPromo = document.querySelector('.loja');

produtoPromo.appendChild(conteudoJs);

const postagemJs = document.createElement('div');

postagemJs.innerHTML = 
`<div class='loja'>
    <h1> Bolsa </h1>
 </div>
 <p>Uma bolsa totalemente diferenciada</p>
 <p>Valor: R$ 59,90</p>
 <img src='segunda.png' alt='#'>
`

const anuncioLoja = document.querySelector('#titulo');
anuncioLoja.appendChild(postagemJs);
