
import axios from "axios";

const url='https://covid19.mathdro.id/api'

//the work of async-await is very similar to .then and .catch in class component
export const fetchData = async (country) =>
{
    let changableUrl=url;

    if(country)
    {
        changableUrl=`${url}/countries/${country}`;
    }


    //if the fetching is succesful then only try block will be executed
    try{
        const {data} =await axios.get(changableUrl);

        const modifiedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate,
        }

        return modifiedData;
    }

    //but if there is some error in data-fetching then this catch block will be executed
    catch(error) {

    }
}

/*
   API function for creating chart figure in UI 
*/

export const fetchDailyData = async () => {
    try{
        const { data }=await axios.get(`${url}/daily`)

        const modifiedData=data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            data:dailyData.reportDate,
        }));

        return modifiedData;
        
       // console.log(data)
    }
    catch(error){
      console.log(error);
    }
}

export const fetchCountries = async () =>{
    try{
       const {data:{countries}} =await axios.get(`${url}/countries`);

      // console.log(countries)
      return countries.map((country) => country.name);
    }
    catch(error){
      console.log(error)
    }
}
