import './styles.css'

export default function Header() {
  return (
    <header className='header'
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between" 
      }}
    > <div className='header-container' style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row'
    }}>
      <div>
        <h1 className='header-logo'>LOGO HERE</h1>
      </div>

      <nav className='nav-bar'>
        <a href="#" className="nav-link">Products</a>
        <a href="#" className="nav-link">Solutions</a>
        <a href="#" className="nav-link">Pricing </a>
      </nav>

      <div className='user-account'>
      <a href="#" className="nav-link" id='sign-in'>Sign In</a>
      <a href="#" className="nav-link" id="create-account">Start Free</a>
      </div>
      </div>
    </header>
  );
}
