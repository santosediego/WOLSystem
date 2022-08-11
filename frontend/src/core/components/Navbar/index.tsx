import './styles.css'

function Navbar() {
    return (
        <header>
            <div className="content">
                <nav>
                    <p className="brand">wol<strong>system</strong></p>
                    <ul>
                        <li>
                            <a href='https://github.com/santosediego/WOLSystem' target="_blank" rel='noreferrer'>
                                About
                            </a>
                        </li>
                        <button>Login</button>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;