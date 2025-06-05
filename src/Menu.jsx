import './Menu.css'
const Menu = () => {

    return (
        <div className="Menu">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/home">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/pokeflex">
                        Pokeflex
                    </a>
                    <li className="nav-item">
                    <a className="nav-link active" href="/pokegrid">
                        PokeGrid
                    </a>
                </li>
                </li>
            </ul>
        </div>
    )
}

export default Menu