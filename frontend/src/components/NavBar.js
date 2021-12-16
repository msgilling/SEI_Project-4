import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../styles/main.scss'
import Logo from '../assets/WHITE_LOGO_LANDSCAPE.PNG'
import { userIsAuthenticated, getUserId } from './helpers/auth'
import { useHistory } from 'react-router'


const NavBar = () => {
  const history = useHistory()
  const id = getUserId()
  console.log('get user id', id)
  
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    console.log('you logged out')
    history.push('/')
  }
  console.log('user is authenticated', userIsAuthenticated())

  return (
    <div className="navbar-static-top">
      <Navbar className="is-flex is-justify-content-space-between navbar-fixed-top"
        id="nav-bg"
        variant="dark"
        sticky="fixed"
        fixed="top"
        expand="sm"
        collaspeOnSelect>
        <Navbar.Brand href="/images/">
          <figure>
            <img
              src={Logo}
              width="100"
              height="100" />{' '}
          </figure>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="navbar-nav is-flex is-flex-direction-row">
            <Nav.Link href="/images/"><i className="bi bi-file-image " id="icons"></i></Nav.Link>
            {userIsAuthenticated && <Nav.Link href="/upload" id="uploadicon"><i className="bi bi-plus-square" id="icons"></i></Nav.Link>}
            {userIsAuthenticated && <Nav.Link href={`/userprofile/${id}`}><i className="bi bi-person-square" id="icons"></i></Nav.Link>}
            <NavDropdown title="More" className="align-items-center">
              {!userIsAuthenticated() ?
                <div>
                  <NavDropdown.Item href="/login/"  id="nav-links">Log In</NavDropdown.Item>
                  <NavDropdown.Item href="/register/" id="nav-links">Register</NavDropdown.Item>
                </div>
                : 
                <div>
                  <NavDropdown.Item onMouseDown={handleLogout} className="logout" id="nav-links">Log out</NavDropdown.Item>
                </div>
              }

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>

  )
}

export default NavBar