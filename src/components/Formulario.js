import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Formulario extends Component {

    categoriaRef = React.createRef()

    cambiarCategoria = (e) => {
        e.preventDefault()
        console.log(this.categoriaRef.current.value)
        this.props.consultarNoticias(this.categoriaRef.current.value)
    }

    render(){
        return(
            <div className='buscador row'>
                <div className='s12 col m8 offset-m2'>
                    <form onSubmit={this.cambiarCategoria}>
                        <h2>Noticas por Categoria</h2>
                        <div className='input-field col s12 m8'>
                            <select ref={this.categoriaRef}>
                                <option value='general' defaultValue> General </option>
                                <option value='business' defaultValue> Negocios </option>
                                <option value='entertainment' defaultValue> Entretenimiento </option>
                                <option value='science' defaultValue> Ciencia </option>
                                <option value='sports' defaultValue> Deportes </option>
                                <option value='technology' defaultValue> Tecnologia </option>
                            </select>
                        </div>
                        <div className='input-field col s12 m4'>
                            <input type="submit" className='btn light-green lighten-2' value="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
}

export default Formulario
