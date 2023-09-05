import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: " 0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          CJ CREA
        </Typography>
        <QrCode2Icon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search>
          <InputBase placeholder="Rechercher..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://scontent.flfw4-1.fna.fbcdn.net/v/t39.30808-6/311105569_2307173479441971_5860882596807986438_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAZY8aTHgH32Ozt0DDzj8mljQJeST_DjWWNAl5JP8ONWDZAl8JBvonX3Z7n6RC4RL4K2U2uxqVRZhvmQnrEsZg&_nc_ohc=mhhZNIMgSsUAX9qS5v-&_nc_ht=scontent.flfw4-1.fna&oh=00_AfAfxGbETWcOoLuZIS-ILzYYOcdmGIPdjj5SoVlcugnlOw&oe=64FC9838"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://scontent.flfw4-1.fna.fbcdn.net/v/t39.30808-6/311105569_2307173479441971_5860882596807986438_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAZY8aTHgH32Ozt0DDzj8mljQJeST_DjWWNAl5JP8ONWDZAl8JBvonX3Z7n6RC4RL4K2U2uxqVRZhvmQnrEsZg&_nc_ohc=mhhZNIMgSsUAX9qS5v-&_nc_ht=scontent.flfw4-1.fna&oh=00_AfAfxGbETWcOoLuZIS-ILzYYOcdmGIPdjj5SoVlcugnlOw&oe=64FC9838"
          />
          <Typography variant="span">Jakhecs</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
