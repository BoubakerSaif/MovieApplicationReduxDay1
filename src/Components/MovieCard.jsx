import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../Redux/movieSlice";
import { Link } from "react-router-dom";

const MovieCard = ({ movieInfo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title>{movieInfo.title} </Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
          <Rating name="read-only" value={movieInfo.rating} readOnly max={10} />
          <Link to={`/details/${movieInfo.id}`}>
            <Button variant="primary"> Check Details </Button>
          </Link>

          <Button
            variant="danger"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              dispatch(deleteMovie(movieInfo.id));
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
