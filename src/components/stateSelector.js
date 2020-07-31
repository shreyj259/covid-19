import React from 'react';
import {NativeSelect,FormControl,Grid} from '@material-ui/core'

const ChoseState=({handleChange,data})=>{
    return(
        <Grid container justify="center">
        <FormControl style={{margin:"1%"}} >
        <NativeSelect defaultValue="Total" onChange={(e)=>handleChange(e.target.value)}>
        {data.map((obj,i)=><option key={i}>{obj.state}</option>)}
        </NativeSelect>
        </FormControl>
        </Grid>
    )
}


export default ChoseState;