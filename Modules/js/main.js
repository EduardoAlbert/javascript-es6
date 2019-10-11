import { HelloWorld as HelloWorldComponent, List as Lista } from './components'

import { agrupaPorMaiorEMenor, eDeMaior as eMaioridade } from './modules/utils';

import pessoasMock from './mock/pessoas';

// console.log('maioridade:',eMaioridade(18));
// console.log('maioridade:',eMaioridade(17));

const pessoas = agrupaPorMaiorEMenor(pessoasMock)

const html= `
  ${HelloWorldComponent('Programador a Bordo')}
  <h3>Maiores</h3>
  ${Lista(pessoas.maiores)}
  <h3>Menores</h3>
  ${Lista(pessoas.menores)}
`

document.getElementById('app').innerHTML = html