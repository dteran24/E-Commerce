
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { auth, provider, emailProvider } from "../firebaseConfig";
export default function Login(props) {
  
  const {setIsAuth} = props;
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) =>{
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/store");
        
        
    });
  }
  const signInWithEmail = () =>{
    localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/store");


  }

//ToDo: Use EmailAuthProvider
  
      return(
        <Container>
        <Stack className=" col-md-5 mx-auto my-5">
          <Form onSubmit={signInWithEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <div className="d-grid">
            <Button type="submit" className="d-grid" >Sign in</Button>
          </div>
           
         
            
          </Form>
            
            <p className="mx-auto my-3">Or</p>
            <Button onClick={signInWithGoogle}>Sign in with google</Button>
          </Stack>
          </Container>
          
      );
    
  }