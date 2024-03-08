import { Card, CardText } from "react-bootstrap";
import image from "../../images/property-1.jpg";
import "./propertyCard.css";
import BedIcon from "@mui/icons-material/Bed";
import StraightenIcon from "@mui/icons-material/Straighten";
import GavelIcon from "@mui/icons-material/Gavel";
import { Link } from "react-router-dom";
import { BiSolidDetail } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty } from "../../redux/actions/actionProperty";


const PropertModifyCard = ({property}) => {
    const {propertys} = useSelector(state=>state.propertyReducer)
    const dispatch = useDispatch()
    const handleDelete = (e)=>{
        // e.preventDefault()
        dispatch(deleteProperty(property._id))
        // console.log(propertys)
    }

  return (
    <div className="main-container">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={property.pr_image?property.pr_image:image} />
        <Card.Body>
          <CardText className="text-card"> ${property.pr_price}</CardText>
          <Card.Title className="text-title">{property.pr_address}</Card.Title>
          <Card.Text className="text-card">
            <div className="info-container">
              <div>
                <span className="icon-container">
                  <BedIcon className="bed-icon" />
                </span>
                {property.pr_num_rooms} Rooms
                <br />
                <span className="icon-container">
                  <StraightenIcon className="bed-icon" />
                </span>
                {property.pr_size} sqft
                <br />
                <span className="icon-container">
                  <GavelIcon className="bed-icon" />
                </span>
                {property.pr_type}
                <br />
              </div>
              <div className="property_card__icon-container">
                <Link to={`/detailcard/${property._id}`}>
                    <BiSolidDetail className="property_card__icon"/>
                </Link>
                <Link to={`/detailcard/${property._id}`}>
                    <GrUpdate className="property_card__icon"/>
                </Link>
                    <MdDeleteOutline className="property_card__icon" onClick={handleDelete}/>
              </div>
            </div>
          </Card.Text>
          <Card.Text className="text-availability">
            {" "}
            {property.pr_availability ? "Available" : "Not Available"}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PropertModifyCard