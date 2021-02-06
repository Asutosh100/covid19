import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index'

function CountryPicker({handleCountryChange})
{

   const [fetchedCountries,setFetchedCountries]=useState([]);

   /*
    useEffect(): hook to create sideEffects in react
    after every single render and update useEffect() will be called
    
    dependancy list:we supply extra argument for conditinal execution of useEffect()
   */

   useEffect(() => {
       const fetchAPI = async () =>{
           setFetchedCountries(await fetchCountries())
       }

       fetchAPI();
   },[fetchedCountries]);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}> 

           <FormControl className={styles.formControl}>
               <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                   <option value="global">Global</option>
                   {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
               </NativeSelect>
           </FormControl>
        </div>
    )
}

export default CountryPicker
