import '../navBar/navBar.css';
import { CartWidget } from '../cartWidget/cartWidget'
import {NavLink} from 'react-router-dom'


export const NavBar = ({cartQuantity = 0}) => {
    return(
        <div className="App container ">
            
              
              <nav className="container navbar navbar-expand-lg navbar-light  d-flex fixed-top navBarPanda ">

                  <NavLink exact to={'/'} activeClassName="active-navlink" className="navlink"> PANDA </NavLink>
                  <button className="navbar-toggler navBarPanda " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navBarPanda "></span>
                  </button>

                  <div className="collapse navbar-collapse d-flex" id="navbarNav">
                    <ul className="navbar-nav">
                    
                      <li className="nav-item">
                        <div className="nav-link" href="#quees"><NavLink to={'/fruit'}  activeClassName="active-navlink" className="navlink"> Fruit </NavLink></div>
                      </li>
                      <li className="nav-item">
                        <NavLink to={'/items'}  activeClassName="active-navlink" className="navlink"> items </NavLink>
                      </li>
            
                      <li className="nav-item">
                        <div className="nav-link" href="#contacto"><NavLink to={'/contacto'}  activeClassName="active-navlink" className="navlink"> Contacto </NavLink></div>
                      </li>
                    
                    </ul>
                  </div>
                    <div className="d-flex justify-content-end mr-4 pr-4">
                      <li className="nav-item d-flex d-flex justify-content-end">
                            
                        <div className="dropdown " href="#carrito">
                          <button className="btn .bg-gradient-light  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <NavLink to={'/carrito'}  activeClassName="active-navlink" className="navlink"> 
                          
                              <CartWidget />  
                              ( {cartQuantity})
                            </NavLink>
                          </button>
                        </div>
                        <div id="carrito2" className="dropdown-menu  " aria-labelledby="dropdownMenu2">
                            
                        </div>
                      </li>
                      
                    </div>
              </nav>   

             
              
       
        </div>
     
    )
  }


   
//   <header className="App-header row">
//   <p>Bienvenidos perritos malvados</p>
// </header>
  