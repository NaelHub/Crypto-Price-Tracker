import React from "react";

const useStyle = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./baner2.jpg)",
  },
}))

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

      </Container>
    </div>;
  
};

export default Banner;
