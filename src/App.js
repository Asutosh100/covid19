
import './App.css';

import Cards from './components/Cards/Cards'

import CountryPicker from './components/CountryPicker/CountryPicker'

import React, { Component } from 'react'
import { fetchData } from './api/index';
import styles from './App.css';
import Chart from './components/Chart/Chart'

export class App extends Component 
{
  state={
    data:{},
    country:'',
  }

  async componentDidMount()
  {
    const fetchedData = await fetchData();

    // console.log(data);

   this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) =>
  {
    //console.log(country);

    //fetch the data
    const fetchedData = await fetchData(country);

    console.log(fetchedData);
   //set the state
   this.setState({data: fetchedData,country:country});
  }



  render() {

    const {data,country}=this.state 

    return (
      <div className={styles.container}>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data}  country={country}/>
          
      </div>
    )
  }
}

export default App;
