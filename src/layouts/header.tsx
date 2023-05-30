import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                      Logo
                    </div>
                    <div className="header__menu">
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/blog">
                            Blog
                        </NavLink>
                        <NavLink to="/about">
                            About us
                        </NavLink>
                        <NavLink to="/xxx">
                            Non-existant
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default Header