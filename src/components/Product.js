import {Card, Button} from 'react-bootstrap';

import React from 'react'

export default function Product(props) {
    const {product, onAdd,} = props;
  return (
    <Card className='my-5'>
                <Card.Img variant='top'  src={require ('../images/' + product.image +'.jpg')} alt={product.name} />
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle>${product.price}</Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Button variant='primary' onClick={() => onAdd(product)}>Add to cart</Button>
                </Card.Body>
            </Card>
  )
}

