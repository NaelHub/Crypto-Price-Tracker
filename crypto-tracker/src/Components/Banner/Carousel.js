import React, { useEffect } from "react";
import {makeStyles } from "@material-ui/core"
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import {TrendingCoins} from "../../config/api"
import {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';

const useStyles = makeStyles((theme) => ({
  Carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {

  const [trending, setTrending] = useState([]);
  const classes = useStyles();

  const { currency, symbol} = CryptoState()

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency))
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
   },[currency]);

   const items = trending.map((coin) => {
     let profit = coin.price_change_percentage_24h >= 0;

     return (
       <link className={classes.carouselItem}
       to={'/coins/${coin.id}'}>
         <img
         src= {coin?.image}
         alt={coin.name}
         height="80"
         style={{ marginBottom: 10 }}
         />
         <span>
           {coin?.symbol}
           &nbsp;
           <span>
            {profit && "+"} (coin?.price_change_percentage?.toFixed(2))%
           </span>
         </span>
         <spam style= {{ fontSize: 22, fontWeight: 500 }}>
           {symbol} {numberWithComas(coin?.current_price.toFixed(2))}
           </spam>
       </link>
     );
   })

   const responsive = {
     0: {
       items: 2,
     },
     512: {
       items: 4,
     },
   };

  return 
    <div className = {classes.carousel}>
     <AliceCarousel
      mouseTracking
      infinite 
      autoPlayInterval= {1000}
      animationDuration= {1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay
      items={items}
>
    </div>;
  
};

export default Carousel