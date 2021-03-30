import { useState } from 'react';

function NavBar ({ logo }) {
  const [searchString, setSearchString] = useState('');


  const handleSearch = event => {
    event.preventDefault();
    // Highlight matching card?
  }

  const handleChange = event => setSearchString(event.target.value);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">

        <a className="navbar-brand display-6 ms-4" style={{fontSize: 20}} href="/">
          <img src={logo} alt={'Parrot Icon'} height='40' width='40'></img>  
          RetroBoard
        </a>

        {/* <h1 className="display-6 me-3">RetroBoard</h1>         */}

        <form className="d-flex me-4" onSubmit={e => handleSearch(e)}>
          {/* Nav Search */}
          <input className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchString}
            onChange={e => handleChange(e)}>
          </input>

          {/* May not need search button if only scanning locally */}
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
          
      </div>
    </nav>
  )
}

export default NavBar;