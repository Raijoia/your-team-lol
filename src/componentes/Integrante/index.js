import './Integrante.css'

// desestruturando o props, ao invés de passar o props, abrimos o object no parâmetro e pegamos apenas os dados que queremos
const Integrante = ({ nome, campeoes, img, corDeFundo }) => {
  return (
    <div className='integrante'>
      <div className='cabecalho' style={{backgroundColor: corDeFundo}} >
        <img src={img} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{campeoes}</h5>
      </div>
    </div>
  )
}

export default Integrante