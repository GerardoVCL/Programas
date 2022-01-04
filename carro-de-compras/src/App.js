import {Component} from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'

class App extends Component{
  state = {
    productos: [
      {name: 'Tomate', price: 1500 , img: '/productos/tomate.jpg'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
      {name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg'},
    ]
  }
  render(){
    return (
      <div>
        <Layout>
          <Productos
            agregarAlCarro={()=> console.log('No Hace Nada')}
            productos = {this.state.productos}
          />
        </Layout>
        
      </div>
    );
  }
}

export default App;