import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFileCode from '@fortawesome/fontawesome-free-regular/faFileCode'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faFileCode} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Bruno Pasini</h1>
                <p><a href="#">Meu CV</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Sobre mim</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Códigos/Arquivos</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contato</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
