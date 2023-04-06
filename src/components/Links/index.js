import './styles.css'


const Link = (props) => {
    return <a className="links-menu" href="#" target="_blank">
        {props.texto}
    </a>
}

export default Link