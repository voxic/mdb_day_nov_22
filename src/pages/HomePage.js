import React, { useEffect } from 'react'
import * as Realm from "realm-web";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PlaceIcon from '@mui/icons-material/Place';
import Container from '@mui/material/Container';
import configData from '../config.json';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

export default function HomePage() {

    const sdk = new ChartsEmbedSDK({
        baseUrl: configData.BASE_URL, // ~REPLACE~ with the Base URL from your Embed Chart dialog.
        });
    const chart = sdk.createChart({
        chartId: configData.CHART_ID, // ~REPLACE~ with the Chart ID from your Embed Chart dialog.
        height: "700px",
        theme: "dark"
        // Additional options go here
        });
    
    useEffect(()=>{
        chart.render(document.getElementById("chart"))
    },[])

    function handleFilter(){
        
    }

  return (
    <Container sx={{pt:4}} maxWidth="xl">
    <Grid container spacing={2}>
    <Grid item xs={12} display="flex" justifyContent="start" alignItems="start">
      <Typography sx={{color: '#00ed63'}} variant='h3' gutterBottom>
        Energy prices
      </Typography>
    </Grid>
    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
    <Typography sx={{color: '#00ed63', pr: 5}} variant='h6'>
        Price Area: 
      </Typography>        
        <Button variant='outlined' sx={{mr: 4}} onClick={()=>{chart.setFilter({"priceArea": "SN1"})}}>SN1</Button>
        <Button variant='outlined' sx={{mr: 4}} onClick={()=>{chart.setFilter({"priceArea": "SN2"})}}>SN2</Button>
        <Button variant='outlined' sx={{mr: 4}} onClick={()=>{chart.setFilter({"priceArea": "SN3"})}}>SN3</Button>
        <Button variant='outlined' sx={{mr: 4}} onClick={()=>{chart.setFilter({"priceArea": "SN4"})}}>SN4</Button>
        <Button variant='outlined' sx={{mr: 4}} onClick={()=>{chart.setFilter({})}}>All</Button>
    </Grid>
    <Grid id="chart" item xs={12} display="flex" justifyContent="center" alignItems="center">
        
    </Grid>

  </Grid>
  </Container>
  )
}
