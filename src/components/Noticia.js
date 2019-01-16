import React from 'react'
import PropTypes from 'prop-types'

const Noticia = (props) => {
    const { description, title, url, urlToImage } = props.noticia
    const imagen = (urlToImage) ?
        <div className="card-image">
          <img src={urlToImage} alt={title} />
        </div>
    :   ''
    
    return(
        <div className="col s12 m4">
          <div className="card">
            {imagen}
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <a href={url} target="_blanck">Ir a la nota</a>
            </div>
          </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired
    })
}

export default Noticia
