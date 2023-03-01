import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function DashBoardCard() {
  const colors = [
  { left: "FFBD96", right: "FE8096" },
  { left: "8AC6F6", right: "1F8DE4" },
  { left: "81D9D1", right: "1FD0B5" },
  { left: "62C0EF", right: "AA98F9" },
];

let lastUsedColor; // Variable to store the last used color object

let randomColor = colors[Math.floor(Math.random() * colors.length)];
while (randomColor === lastUsedColor) {
  randomColor = colors[Math.floor(Math.random() * colors.length)];
}

lastUsedColor = randomColor; // Store the newly selected color object

const gradient = `linear-gradient(to left, #${randomColor.left}, #${randomColor.right})`;

  return (
    <Card
      sx={{
        maxWidth: "35vh",
        mb: "3%",
        backgroundImage: gradient,
      }}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
