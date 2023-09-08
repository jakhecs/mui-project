import { Box } from "@mui/material";
import React from "react";
import Post from "./post";
import Form from "./form";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Form />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
