import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from "../components/Modal";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';



function Cards({ character }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className="Flip-card" sx={{ maxWidth: 180 }}>
      <CardActionArea className="Flip-card-inner">
        <CardMedia
          className="Flip-card-front"
          // component="img"
          image={character.image}
          alt="characters rick and morty"
        />
        <CardContent className="Flip-card-back">
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Button onClick={handleOpen}>Open modal</Button>
        </CardContent>
        {/* <button type="button" onClick={handleOpen}>
          LEARN MORE
        </button> */}
        {/* <Modal setModal={setOpen } handleClose ={handleClose} /> */}
      </CardActionArea>


      {/* <div className="Modal">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {character.species}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {character.status}
          </Typography>
        </Box>
      </Modal>
      </div> */}

    </Card>
  );
}
export default Cards;



