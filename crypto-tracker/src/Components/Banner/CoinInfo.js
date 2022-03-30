import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { HistoricalChart } from "../config/api";
import {
  CircularProgress,


  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { Line } from "react-chartjs-2";
const CoinInfo ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();


  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { CryptoState } from "../CryptoContext";
  import { HistoricalChart } from "../config/api";
  import {
    CircularProgress,


    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core";
  import { Line } from "react-chartjs-2";
  const CoinInfo ({ coin }) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    const { currency } = CryptoState();