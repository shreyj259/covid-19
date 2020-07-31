import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = ({ selectedData }) => {
  if (!selectedData.confirmed) {
    return <h1>LOADING</h1>;
  }


  return (
    <div>  
      <Grid container spacing={3} justify="center"> 
      <Grid item align="center" xs={12} style={{backgroundColor:"#8290C3",color:"white",padding:"1%",paddingTop:"2%"}}>
        <Typography  variant="h5">COVID-19 INDIA TRACKER</Typography>
        <Typography  variant="h6">THAT MAKES YOU SMILE</Typography>
        </Grid> 
       <Grid item component={Card} xs={12} md={2} style={{margin:"2% 3%",borderBottom:"5px solid #ff1a1a"}} >
        <CardContent>
          <Typography color="textSecondary" variant="h5" gutterBottom>Total Infected</Typography>
          <Typography gutterBottom>
            <CountUp
              start={0}
              end={selectedData.confirmed}
              duration={2.75}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary"  gutterBottom>New Cases</Typography>
          <Typography gutterBottom>
            <CountUp
              start={0}
              end={selectedData.deltaconfirmed}
              duration={2.75}
              separator=","
            />
            </Typography>
            <Typography variant="body2">Number of Cases Of Covid-19</Typography>
        </CardContent>
       </Grid>
       <Grid item component={Card} xs={12} md={2} style={{margin:"2% 3%",borderBottom:"5px solid #1a75ff"}}>
        <CardContent>
        <Typography color="textSecondary" variant="h5" gutterBottom>Total Active</Typography>
          <Typography gutterBottom>
            <CountUp
              start={0}
              end={selectedData.active}
              duration={2.75}
              separator=","
            />
          </Typography>
          <Typography variant="body2" >Number of Active Cases Of Covid-19</Typography>
        </CardContent>
       </Grid>
      <Grid item component={Card} xs={12} md={2} style={{margin:"2% 3%",borderBottom:"5px solid #00ff00"}}>
        <CardContent>
        <Typography color="textSecondary" variant="h5" gutterBottom>Total Recovered</Typography>
          <Typography gutterBottom>
            <CountUp
              start={0}
              end={selectedData.recovered}
              duration={2.75}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary" gutterBottom>Today's Recovery</Typography>
          <Typography gutterBottom>
            <CountUp
              start={0}
              end={selectedData.deltarecovered}
              duration={2.75}
              separator=","
            />
            </Typography>
            <Typography variant="body2">Number of Recovered cases of Covid-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={2} style={{margin:"2% 3%",borderBottom:"5px solid #8c8c8c"}}>
        <CardContent>
        <Typography color="textSecondary" variant="h5" gutterBottom>Deceased</Typography>
          <Typography gutterBottom>
            <CountUp
              start={0}
              end={selectedData.deaths}
              duration={2.75}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary" gutterBottom>Deaths Today</Typography>
          <Typography gutterBottom>
            <CountUp
              start={0}
              end={selectedData.deltadeaths}
              duration={2.75}
              separator=","
            />
            </Typography>
            <Typography variant="body2" >Number of Deaths Caused By Covid-19</Typography>
        </CardContent>
      </Grid>
      </Grid>
      <Grid container spacing={3} justify="center"> 
      <Typography variant="h6" color="textSecondary" style={{margin:"3%"}}>Last Updated: {selectedData.lastupdatedtime}</Typography>
      </Grid>
    </div>
  );
};

export default Cards;
