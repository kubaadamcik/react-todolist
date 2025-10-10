function NavBar() {
    return <div className="container-fluid">
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/tasks">Tasks</a>
                </li>
            </ul>
        </div>
    </div>;
}

export default NavBar;