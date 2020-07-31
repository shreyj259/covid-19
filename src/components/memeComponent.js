import React,{useState} from 'react';
import {MEMES} from './memes';
import {Grid,Button,Typography} from '@material-ui/core';

const createArray=(start,end)=>{
    let myArray=[];
    for(let i=start;i<=end;i++){
        myArray.push(i);
    }
    return myArray;
} 

var numArray=createArray(2,24);


function getRandomNumber(min,max){
    let temp= max-min +1;
    let temp2 =Math.random()*temp;
    let result=Math.floor(temp2)+min;
    return result;
}



const randomGenerator=()=>{
    if(numArray.length<=0)
    return -1;
    let randomIndex=getRandomNumber(0,numArray.length-1);
    let randomNumber=numArray[randomIndex];
    numArray.splice(randomIndex,1);
    return randomNumber;
}

const Meme=()=>{

const [random,setRandom]=useState(0);
console.log(random);
const Maymay=MEMES;

const handleClick=()=>{
    setRandom(randomGenerator());
}
const print=()=>  {   if(random!=-1)
    {return <img src={Maymay[random].image} style={{width:"80%",margin:"3%"}}/>}
    else
    {return (<React.Fragment>
            <Typography variant='h2' color="secondary" style={{margin:"20px"}}>Memes Over !!</Typography>
             <Typography variant='h4' color='primary' style={{margin:"5px"}}>Stay Home Stay Safe!!</Typography>
             </React.Fragment>
    )}
}
    return(
        <Grid container justify="center" spacing={3}>
        <Grid align="center">
                <Button align="center" variant="contained" color="secondary" style={{marginTop:"3%"}} onClick={handleClick}>Click here to smile once again</Button>
               {print()}
        </Grid>
        </Grid>
    )
}

export default Meme;