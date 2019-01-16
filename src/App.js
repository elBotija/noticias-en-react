import React, { Component } from 'react'
import Header from './components/Header'
import Noticias from './components/Noticias'
import Formulario from './components/Formulario'

class App extends Component {

    state = {
        noticias: []
    }

    componentDidMount(){
        this.consultarNoticias()
    }

    consultarNoticias = (categoria = 'general') => {
        let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=7dcb6361a1ce414d887a4547ca1a71be`

        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(noticias => {
                this.setState({
                    noticias: noticias.articles
                })
            })
    }

    render() {
        return (
            <div className="contenedor-app">
                <Header
                    title='Noticias'
                />
                <div className="container white contenedor-noticias">
                    <Formulario
                        consultarNoticias={this.consultarNoticias}
                    />
                    <Noticias
                        noticias={this.state.noticias}
                    />
                </div>
                <p className='center'><i>Powered by <a href='https://newsapi.org/'>NewsAPI.org</a></i></p>
            </div>
        );
    }
}

export default App;
