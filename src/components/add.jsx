import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          width={400}
          height={280}
          borderRadius={5}
          p={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Créer une publication
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.flfw2-1.fna.fbcdn.net/v/t39.30808-6/274722788_2125552460937408_3800088550723703364_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEVKkHw3-JwzvXpCRCKUqPr3eig5wQ7p9Xd6KDnBDun1asgvNpzDSeweVTtALMBA44CwxkrqW0wYmoNWRkuZBcP&_nc_ohc=itwpvWq07G0AX8-SiPD&_nc_ht=scontent.flfw2-1.fna&oh=00_AfBcRBmO6QJZfDarbRDwrgYJzoYWeuMcgkxPJlqplu1tyQ&oe=64FE4173"
            />
            <Typography variant="span" fontWeight={500}>
              Carmen Jakhecs
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Quoi de neuf?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Poster</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
