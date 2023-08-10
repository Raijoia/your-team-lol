import Integrante from '../Integrante'
import './Role.css'

const Role = (props) => {
  return (
    props.integrantes.length > 0 && 
    <section className='role' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <div className='integrantes'>
        {props.integrantes.map( integrante => <Integrante corDeFundo={props.corPrimaria} key={integrante.nome} nome={integrante.nome} campeoes={integrante.campeoes} img={integrante.imagem} /> )}
      </div>
    </section>
  )
}

export default Role