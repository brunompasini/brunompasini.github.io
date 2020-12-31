import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
//import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
//import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'



class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre mim</h2>
          <p>Sou um estudante do 4o ano de Engenharia Elétrica da Poli-USP que adora programar, <a href="https://github.com/brunompasini">aqui</a> tem alguns projetos meus.</p>
          <p>Interessado principalmente em Machine Learning e suas aplicações em finanças, mas venho me aventurando por web.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Códigos</h2>
          <p>Alguns desafios do Kaggle:</p>
          <ul>
            <li><a href="https://github.com/brunompasini/Pneumonia-Detect">CNN que detecta pneumonia em fotos de raios X</a></li>
            <li><a href="https://github.com/brunompasini/Titanic">Titanic dataset</a></li>
            <li><a href="https://github.com/brunompasini/Digit-Recognizer">MNIST dataset</a></li>
          </ul>
          <p><a href="https://github.com/brunompasini/pdfjoin/">Juntar PDFs</a></p>
          <p><a href="#">Guia do Quartus para Lab Dig</a></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contato</h2>
          <form method="post" action="#">
            <div className="field">
              <label htmlFor="message">e-mails:</label>
            </div>
            <ul>
              <li><a href="mailto:brunompasini@gmail.com">brunompasini@gmail.com</a> - Prefiro</li>
              <li><a href="mailto:brunopasini@usp.br">brunopasini@usp.br</a></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://github.com/brunompasini">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main