import {useNavigate} from "react-router-dom";
import {Modal,Button, ListGroup, ListGroupItem, Figure, Stack, Container} from 'react-bootstrap';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';



export default function CartModal(props) {
  const {show, handleClose, cartItems, onAdd, onRemove, isAuth, setShowModal} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * .0625;
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  let navigate = useNavigate();

  const [placingOrder, SetPlacingOrder] = useState(false);
  const [complete, setComplete] = useState("Check Out");
 

  const check = () =>{
    if(!isAuth){
      navigate("/login");
      setShowModal(false);

    }else{
        SetPlacingOrder(true);
        setComplete("Completing Purchase...");
        setTimeout(() => {
          setShowModal(false);
          localStorage.removeItem("cart");
          window.location.reload(false);
        }, 3000);
        
       
     
    
      }

  }


 

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton/>
        <Modal.Title className='mx-auto'>Shopping Cart</Modal.Title>
        <Modal.Body>
          <ListGroup>
           {cartItems.length === 0 &&<ListGroupItem><p style={{textAlign:"center"}}>Cart is empty</p></ListGroupItem>}
           {cartItems.map((item) =>(
             <ListGroupItem key={item.id}>
               <Stack direction='horizontal' gap={3}>

               <Figure>
                <Figure.Image
                width={100}
                height={120}
                alt={item.name}
                src={require ('../images/' + item.image +'.jpg')}/>
                </Figure> 
                <p style={{fontSize: "1.5rem"}}>{item.name}</p>
                <p className='ms-auto'>${item.price} </p>
                
                </Stack>

                <Stack direction='horizontal' gap={3}>

                <Button variant='secondary'className='ms-auto' onClick={() => onRemove(item)}>-</Button>
                
                <Button disabled variant='outline-dark'>{item.qty}</Button>
                <Button variant='primary'  onClick={() => onAdd(item)}>+</Button>
                


                </Stack>
               </ListGroupItem>
           ))}
          </ListGroup>
          {cartItems.length !== 0 && (
          <Container className='mt-2'>
            <Stack gap={0}>
            <p>Sub-total: ${itemsPrice.toFixed(2)}</p>
            <p>Tax: ${taxPrice.toFixed(2)}</p>
            <p>Shipping: ${shippingPrice.toFixed(2)}</p>
           
     
           
           <p style={{fontSize: "2rem"}}> Total: ${totalPrice.toFixed(2)}</p> 
  
          </Stack>
          </Container>
        )}
        </Modal.Body>
    <Modal.Footer>
      <Container className='d-grid'>
      {cartItems.length === 0 ? (
              <Button variant="secondary" onClick={handleClose}>Close</Button>
        ): (<Button  disabled={placingOrder} variant="success" size='lg' onClick={check}>{complete}</Button>)}
      
      </Container>
        
        
    </Modal.Footer>
        
    </Modal>
   
  </>
  )
}
