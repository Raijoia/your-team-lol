import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {
  const [nome, setNome] = useState("")
  const [campeoes, setCampeoes] = useState("")
  const [imagem, setImagem] = useState("")
  const [role, setRole] = useState("")

  const aoSalvar = (evento) => {
    evento.preventDefault()

    props.aoColaboradorCadastrado({
      nome,
      campeoes,
      imagem,
      role
    })

    setNome('')
    setCampeoes("")
    setImagem('')
    setRole('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos integrantes</h2>
        <CampoTexto 
          required={true} 
          label='Nome' 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          required={true} 
          label='Personagens' 
          placeholder="Digite seus campeões" 
          valor={campeoes}
          aoAlterado={valor => setCampeoes(valor)}
        />
        <CampoTexto 
          label='Imagem' 
          placeholder="Informe o endereço da sua imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          required={true}  
          label='Role' 
          itens={props.times}
          valor={role}
          aoAlterado={valor => setRole(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario