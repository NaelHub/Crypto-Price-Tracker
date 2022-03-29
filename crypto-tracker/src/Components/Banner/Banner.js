import React from "react";
import Carousel from "./carousel";

const useStyle = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./baner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return 
    <div className= {classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
          variant="h2"
          style={{
            fontWeight: "bold",
            marginBottom: 15,
            fontFamily: "Monstserrat",
          }}
        >
          Cypto Compass
        </Typography>
        <Typography
        variant= "subtitle2"
        style={{
          color: "darkgrey",
          textTransform: "capitalize",
          fontFamily: "Montserrat",
        }}

        Get all the info regarding your favourite crypto currency
        ></Typography> 
        </div>
        <Carousel></Carousel>

      </Container>
    </div>;
  
};

export default Banner;
