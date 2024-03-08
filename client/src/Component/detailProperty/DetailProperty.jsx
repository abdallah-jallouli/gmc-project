import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProperty } from '../../redux/actions/actionProperty';
import image from "../../images/property-1.jpg";
import "./detailProperty.css"


const DetailProperty = () => {
//reducer state
const { property1 } = useSelector((state) => state.propertyReducer);
console.log(property1);

const dispatch = useDispatch();
const { _id } = useParams();



useEffect(() => {
  dispatch(getOneProperty(_id));
}, [_id]);

  return (
    //  <div>detail property</div>
    <Card className="property-details">
      <Card.Body>
        <Card.Title>Property Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Address:</strong> <span>{property1.pr_address}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Price:</strong> <span>{property1.pr_price}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> <span>{property1.pr_description}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Size:</strong> <span>{property1.pr_size} sq ft</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Number of Rooms:</strong> <span>{property1.pr_num_rooms}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> <span>{property1.pr_type}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Category:</strong> <span>{property1.pr_category}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Availability:</strong> <span>{property1.pr_availability ? 'Available' : 'Not Available'}</span>
          </ListGroup.Item>
          <ListGroup.Item className='image-container'>
            {/* <img src={property1.pr_image} alt="Property" /> */}
            <img src={image} alt="Property" />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default DetailProperty