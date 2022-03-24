
import {Navbar, Container, Nav, Button, Badge}  from 'react-bootstrap';
import {LinkContainer} from'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {auth} from "../firebaseConfig";
import {signOut} from "firebase/auth";
import logo from "../images/logo.jpg"

export default function NavBar(props) {
  const {setShowModal, countCartItems, isAuth, setIsAuth} = props;
  const signUserOut = () =>{
    signOut(auth).then(()=> {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      window.location.pathname = "/login";
    

    });
}



  return (
    <>
    <Navbar bg="light" expand="sm" >
    <Container>
    <LinkContainer to={"/"}><Navbar.Brand><img id='logo' src={logo} alt='logo'/></Navbar.Brand></LinkContainer>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
      <Navbar.Collapse id="basic-navbar-nav" style={{textAlign:"center"}}>
      <Container>
        <Nav className="me-auto" style={{fontSize:"1.5rem"}}>
        <LinkContainer to={"/"}><Nav.Link>Home</Nav.Link></LinkContainer>
         <LinkContainer to={"/store"}><Nav.Link>Store</Nav.Link></LinkContainer>
         {isAuth ? (<Nav.Link><Button variant='outline-dark' onClick={signUserOut}>Logout</Button></Nav.Link>) : (<LinkContainer to={"/login"}><Nav.Link>Login</Nav.Link></LinkContainer>)}
         <Nav.Link><Button variant='outline-dark' onClick={() => setShowModal(true)}>
           <FontAwesomeIcon icon={faCartShopping}/>{
           countCartItems ?(<Badge>{countCartItems} </Badge>):'' }</Button></Nav.Link>
        </Nav>
        </Container>
       
      </Navbar.Collapse>
      
  </Navbar>
 
  </>
  )
}
