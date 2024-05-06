
import './App.css'
import Card from './componentes/CardPro'
import lenguajes from './datos/lenguajesPro'


function App() {

  const ListaLenguajes = lenguajes.map((l, index) => {
    return <Card key={index} nombre ={l.nnombre} titulo={l.ntitulo} descripcion={l.ndescripcion} />
  });



  return (
    <div className='app'>
      <h1>Hola Mundo</h1>
      <div className='container'>
        {ListaLenguajes}
      </div>
    </div>
  )
}

export default App
