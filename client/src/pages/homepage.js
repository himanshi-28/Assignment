import React from 'react';
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import JoinInnerIcon from '@mui/icons-material/JoinInner';


const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "75vh",
        }}
      >
    <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
      
      {/*Text to Summary*/} 
      <Box p={2}>
          {/*<Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
  </Typography>*/}
          <Card
            onClick={() => navigate("/summary")} sx={{boxShadow: 2,borderRadius: 5,height: 190,width: 200,"&:hover": {border: 2,boxShadow: 0,borderColor: "primary.dark",cursor: "pointer",},}}>
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2,  }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
               UPLOAD PICTURE
              </Typography>
              
            </Stack>
          </Card>
        </Box>
      </Box>
      </Box>
        </>
  );
};

export default Homepage;