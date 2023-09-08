import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      mr={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Amis(es) en ligne
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar alt="Trevor Henderson" src="" />

          <Avatar
            alt="Agnes Walker"
            src="https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={2}>
          Dernière publications
        </Typography>

        <ImageList variant="masonry" cols={3} gap={5} rowHeight={100}>
          <ImageListItem>
            <img
              src="https://scontent.flfw4-1.fna.fbcdn.net/v/t39.30808-6/278810041_2163187933840527_7826318492468420139_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeH1tPJ326YXnQoFemWVg8Ye8eNEtCZdQlHx40S0Jl1CURU9RorrH7j9ugnNXdAmdbl15d_Egp48DvN0UJINYiaZ&_nc_ohc=bxtOzHcOvcMAX8pxWY8&_nc_ht=scontent.flfw4-1.fna&oh=00_AfDxpy-LV1u2ZAerrZpbKQfGXm8icf-yHAQ5n_cR-l1CsQ&oe=64FCFAF5"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://www.perlesandco.com/images_content/tutoriels/tutos/2/8/7/28781/cover.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://scontent.flfw4-1.fna.fbcdn.net/v/t1.6435-9/182193861_1893820680777255_6719022244160974510_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHWIACtsALxpnNFhJ8ommpn9j8VVU8V_zz2PxVVTxX_PFK2WgNxQG2X5Q0FBQ30yzQrz9661-MppRKYZx2tI8le&_nc_ohc=_MUSbc0Hc_4AX-j4iYy&_nc_ht=scontent.flfw4-1.fna&oh=00_AfBY5NxvjCc6-LXH1HuUQqnirPz1d5tlGWzf_6nvRLbynA&oe=651FDEEE"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/photos-gratuite/lettres-plusieurs-couleurs_93675-129798.jpg?size=626&ext=jpg&ga=GA1.2.703725128.1694002839&semt=sph"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://img.ltwebstatic.com/images3_pi/2022/04/25/1650871715a6e81e7e24251d6f9308a9639eea6c78_thumbnail_720x.webp"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://scontent.flfw4-1.fna.fbcdn.net/v/t39.30808-6/274762039_2125552464270741_1868700231048060300_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeF02Yc_12vuKEYql2jAEB7LhB8SryVACBGEHxKvJUAIEW5E_fpNcLl3ikzRMiWuaFje14QIRCwk9-CTMEvIUwnN&_nc_ohc=b2vrQqN5iBoAX9cdhi0&_nc_ht=scontent.flfw4-1.fna&oh=00_AfDnO89SXsr5EFqBKPqkf8BYk9kAgWco0nrKkV0tTgBSkw&oe=64FC7B04"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img3.pandahall.com/photos/e/3/420_420_e3bfb1dc-133e-4f0f-a41f-4a7d595bea01.JPG"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.ytimg.com/vi/i6szo1kjfQE/maxresdefault.jpg"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://static.eproshopping.fr/media/4797e2fd8b2a73aa54dce18ee5f6fd3db5fdc0ad/produit/927f34462c30898a9ef9300749b8a1c4c9bcda8f-lg.jpeg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Dernière conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.flfw2-1.fna.fbcdn.net/v/t39.30808-6/274722788_2125552460937408_3800088550723703364_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEVKkHw3-JwzvXpCRCKUqPr3eig5wQ7p9Xd6KDnBDun1asgvNpzDSeweVTtALMBA44CwxkrqW0wYmoNWRkuZBcP&_nc_ohc=itwpvWq07G0AX8-SiPD&_nc_ht=scontent.flfw2-1.fna&oh=00_AfBcRBmO6QJZfDarbRDwrgYJzoYWeuMcgkxPJlqplu1tyQ&oe=64FE4173"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://scontent.flfw2-1.fna.fbcdn.net/v/t39.30808-6/265304317_2068342806658374_8230057995816235268_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHlv9sPm8ERU2h2yThYznX0I6utzQgUgoojq63NCBSCih-Zj2ShGkDYWqvmMKvZ8GgSuiRm9gOMTO3fzlW5-oXG&_nc_ohc=2wZVOh-Iwy0AX9HTgfH&_nc_oc=AQm24GahDk29DNfA1A5Z1MyhPJJwr5leTi7VILc8Tr5bMO5UIno8Nwxj0qOtWIdpVJA&_nc_ht=scontent.flfw2-1.fna&oh=00_AfCKv4FbDnCdNC0ewgNN5qKPR1vmktYES_cfMgARtfXjrw&oe=64FD92FE"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://m.media-amazon.com/images/I/61yPzuqxJ+L._AC_UF350,350_QL80_.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
