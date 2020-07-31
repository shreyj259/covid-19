import React from 'react';
import {fetchData} from './api/index';
import Cards from './components/cards';
import ChoseState from './components/stateSelector.js';
import Charts from './components/chart';
import Meme from './components/memeComponent';

class App extends React.Component{
    state={
        data:[],
        selectedData:{}
    }

    async componentDidMount(){
        const fetchedData=await fetchData();
        if(fetchedData)
        {const total=fetchedData.filter(obj=>obj.state==="Total");
        this.setState({
            data:fetchedData,
            selectedData:total[0]
        });}

    }

    handleChange=(state)=>{
        const selectedData=this.state.data.filter(obj=>obj.state===state);
        this.setState({
            selectedData:selectedData[0]
        });
    }

    

    render(){
        return(
            <div>
                <Cards selectedData={this.state.selectedData}/>
                <ChoseState  handleChange={this.handleChange} data={this.state.data}/>
                <Charts />
                <Meme/>
            </div>
        )
    }

    
}

export default App;