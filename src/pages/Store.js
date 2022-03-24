
import {Container, Tabs, Tab } from 'react-bootstrap';
import Product from '../components/Product';






export default function Store(props) {
   const {products, onAdd} = props;

  return (
      <>
     
        <Container style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems:"flex-start"}}>
    {products.map((product) =>(
            <Product key={product.id} product={product} onAdd={onAdd}/>
        ))}
       
    </Container>
      
    
    </>
  )
}

