import React from "react"
import { Box, Stack, Typography, Button } from "@mui/material"
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box>
          <Typography color={"#FF2625"} fontWeight="600" fontSize={"45px"}>
            Muscle Mentor
          </Typography>
          <Typography
            fontWeight={400}
            sx={{ fontSize: { lg: "44px", xs: "40px" } }}
            mb="23px"
            mt="30px"
          >
            ultimate app for anyone
          </Typography>
          <Typography fontSize={"22px"} lineHeight="35px" mb={3}>
            looking to build muscle and get stronger.
          </Typography>
          <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{ backgroundColor: "#ff2625", padding: "10px" }}
          >
            Explore Exercises
          </Button>
        </Box>
        <Box>
          <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </Box>
      </Stack>
    </Box>
  )
}

export default HeroBanner
