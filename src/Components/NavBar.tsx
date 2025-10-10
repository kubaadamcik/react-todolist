function NavBar() {
    return <div className="navbar">
        <div className="container-fluid">
            <a className="navbar-brand">To-Do</a>
            <ul className="navbar-nav flex-row gap-3">
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