import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario'
import { useState } from 'react';
import Role from './componentes/Role';
import Rodape from './componentes/Rodape';

function App() {

  const roles =  [
  {
    nome: 'Top',
    corPrimaria: '#ff0000',
    corSecundaria: ' #ff8080'
  },
  {
    nome: 'Jungle',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Mid',
    corPrimaria: '#ffcc00',
    corSecundaria: '#ffeb99'
  },
  {
    nome: 'Adc',
    corPrimaria: '#0000ff',
    corSecundaria: '#99ccff'
  },
  {
    nome: 'Sup',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  }
]

  const [integrantes, setIntegrantes] = useState([])

  const aoNovoColaboradorAdicionado = (integrante) => {
    setIntegrantes([...integrantes, integrante])
    console.log(integrante)
  }

  // JSX
  return (
    <div className="App">
      <Banner />
      <Formulario times={roles.map(role => role.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {roles.map(role => <Role 
        key={role.nome} 
        nome={role.nome} 
        corPrimaria={role.corPrimaria} 
        corSecundaria={role.corSecundaria} 
        integrantes={integrantes.filter(integrante => integrante.role === role.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
