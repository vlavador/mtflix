import React,{Fragment} from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom'
function NavigationMenu() {
    return (
        <Fragment>
        <section className="section-bg">
          <Container className="section-bg"  style={{margin:"0px auto"}}>  
            <Navbar collapseOnSelect="true" expand="lg" bg="dark" variant="dark" style={{paddingRight:"0px",paddingLeft:"0px"}}>
                <Navbar.Brand  as={Link} to="/">MTFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  
                    <Nav className="ml-auto">
                    <NavDropdown title="Television" id="collasible-nav-dropdown"  bg="dark">
               
                        
                      
               <NavDropdown.Item as={NavLink} to="/television/onair/1" >On Air</NavDropdown.Item>
               <NavDropdown.Item as={NavLink} to="/television/airing/1">Airing</NavDropdown.Item>
               <NavDropdown.Item as={NavLink} to="/television/toprated/1"> Top Rated</NavDropdown.Item>
               <NavDropdown.Item as={NavLink} to="/television/popular/1"> Popular</NavDropdown.Item>
           
       
           </NavDropdown>
                    <NavDropdown title="Movies" id="collasible-nav-dropdown" >
               
                        
                      
                        <NavDropdown.Item as={NavLink} to="/movie/upcoming/1" >UpComing</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/movie/popular/1"> Popular</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/movie/toprated/1"> Top Rated</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/movie/nowplaying/1"> nowplaying</NavDropdown.Item>
                    
                
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/person/popular/1">Person</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Container>
            </section>
            </Fragment>
    )
}

export default NavigationMenu