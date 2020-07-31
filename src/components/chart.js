import React,{useEffect,useState} from 'react';
import {Line} from 'react-chartjs-2';
import {fetchChartData} from '../api/index';
import {Grid} from '@material-ui/core';

const Charts=()=>{
    const [selectedData,setSelectedData]=useState([]);

    useEffect(()=>{
        const fetchApi=async ()=>{
            setSelectedData(await fetchChartData());
        }
        fetchApi();
    });
    
    const lineChart=(
        selectedData[0]? (
            <Line
            data={{
              labels: selectedData.map(obj=>obj.date),
              datasets:[{
                  data:selectedData.map(obj=>obj.dailyconfirmed),
                  label:"Infected",
                  borderColor:'#ff1a1a',
                  backgroundColor:"rgba(255,0,0,0.2)",
                  borderWidth:2,
                  fill:true,
                  pointRadius:1
              },
              {
                  data:selectedData.map(obj=>obj.dailyrecovered),
                  label:"Recovered",
                  borderColor:"#00ff00",
                  backgroundColor:"rgba(0,255,0,0.2)",
                  borderWidth:2,
                  fill:true,
                  pointRadius:1
              },
              {
                  data:selectedData.map(obj=>obj.dailydeceased),
                  label:"Deaths",
                  borderColor:"#8c8c8c",
                  backgroundColor:"rgba(0,0,0,0.2)",
                  borderWidth:2,
                  fill:true,
                  pointRadius:1
              }]
          }} 
          options={{
            scales: {
                xAxes: [{
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 25
                   }
                 }]
                }
          }}
          />
        ):null
    )

    return (<Grid container justify="center">
             <Grid item xs={12} md={10} align="center">
            {lineChart}
            </Grid>
            </Grid>)
}

export default Charts;