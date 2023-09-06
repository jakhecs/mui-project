import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            CJ
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Carmen Jakhecs"
        subheader={Date()}
      />
      <CardMedia
        component="img"
        height="15%"
        image="https://www.latelierdejoia.fr/img_s1/139619/boutique/facetune-28-11-2022-15-08-09.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Bracelet personnalisé en perles. A vous de composer votre bracelet
          Little Words ! Pour cela, rien de plus simple, choisissez votre
          couleur et personnalisez votre bracelet du prénom de votre enfant, ou
          tout simplement d’un petit mot qui vous tient à coeur. Maximum 8
          lettres par bracelet (à préciser lors du paiement dans la case « notes
          de commande »). Possibilité d’ajouter à la place d’une lettre, une
          perle noire avec un coeur blanc ou une perle blanche avec une coeur
          noir.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
