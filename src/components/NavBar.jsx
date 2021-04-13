function NavBar ({ logo }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">

        <a className="navbar-brand display-6 ms-4" style={{fontSize: 20}} href="/">
          <img src={logo} alt={'Parrot Icon'} height='40' width='40'></img>  
          RetroBoard
        </a>
          
      </div>
    </nav>
  )
}

export default NavBar;