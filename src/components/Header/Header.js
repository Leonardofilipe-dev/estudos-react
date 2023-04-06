import Link from '../Links'
import './styles.css'
const Header = () => {
    return (
        <div className="divHeader">
            <header>
            <p className="headerTitle">Din DIn</p>
            <nav>
                <Link texto="Cursos" redirect="#" />
                <Link texto="Blog" redirect="#"/>
                <Link texto="Contato" redirect="#"/>
            </nav>
            </header>
        </div>
    )
}

export default Header