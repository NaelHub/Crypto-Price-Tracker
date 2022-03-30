import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext"; % D
const CoinPage () => { % D
  const { id } = useParams();
  const [coin, setCoin] useState();
  const { currency, symbol } CryptoState();
  async () => {
                    = await axios.get(SingleCoin(id))
    const fetchCoin
    const { data }
  }
  return <div>Coin Page</div>;
};
export default CoinPage;