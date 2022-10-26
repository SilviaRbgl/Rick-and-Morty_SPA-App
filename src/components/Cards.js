import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from "../components/Modal";

function Cards({ character }) {
  return (
    <Card sx={{ maxWidth: 180 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={character.image}
          alt="characters rick and morty"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
        </CardContent>
        <button type="button" onClick={<Modal />}>
          LEARN MORE
        </button>
      </CardActionArea>
    </Card>
  );
}
export default Cards;
