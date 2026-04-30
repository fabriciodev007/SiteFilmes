import Logo from '../../assets/logo.png'

function Header() {
  return (
    <div>
      <img src={Logo} alt="Logo do site" className='logo' style={{width:200}} />
    </div>
  )
}

export default Header;