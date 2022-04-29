import "../styles/Card.css"
import { Link } from "react-router-dom"

const Card = ({url, name, id, status, location}) => {
    return(
        <div className="card">
            <img src={url} alt={name} />
            <h2>Name: {name} ID {id}</h2>
            <p>Status: {status}</p>
            <p>Location: {location}</p>
            <Link to={`/detail/${id}`}>
                <button>Detial</button>
            </Link>
        </div>
    )
}

export default Card