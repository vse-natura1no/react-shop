export default function Header() {
    return <nav className="navbar bg-primary-subtle fixed-top">
        <div className="container-fluid px-3">
            <a className="navbar-brand" href="#">React Shop</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Repository</a>
                </li>
            </ul>
        </div>
    </nav >
}