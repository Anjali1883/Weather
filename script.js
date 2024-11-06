const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c3688305bfmsh216e074bfb0addcp16c1ddjsn83add5cf2220",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


const getWeather = (city) =>{

    cityName.innerHTML=city
    fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
            console.log(response)
            last_updated_epoch.innerHTML =response.last_updated_epoch 
            last_updated.innerHTML =response.last_updated 
            temp_c.innerHTML =response.temp_c 
            temp_f.innerHTML =response.temp_f  
            is_day.innerHTML =response.is_day 
            wind_mph.innerHTML =response.wind_mph 
            wind_kph.innerHTML =response.wind_kph 
            wind_degree.innerHTML =response.wind_degree 
            wind_dir.innerHTML =response.wind_dir  
            pressure_mb.innerHTML =response.pressure_mb 
            pressure_in.innerHTML =response.pressure_in 
            precip_mm.innerHTML =response.precip_mm 
            precip_in.innerHTML =response.precip_in 
            humidity.innerHTML =response.humidity  
            feelslike_c.innerHTML =response.feelslike_c 
            feelslike_f.innerHTML =response.feelslike_f 
            windchill_c.innerHTML =response.windchill_c 
            windchill_f.innerHTML =response.windchill_f 
            heatindex_c.innerHTML =response.heatindex_c 
            heatindex_f.innerHTML =response.heatindex_f 
            dewpoint_c.innerHTML =response.dewpoint_c 
            dewpoint_f.innerHTML =response.dewpoint_f 
            vis_km.innerHTML =response.vis_km 
            vis_miles.innerHTML =response.vis_miles 
            uv.innerHTML =response.uv 
            gust_mph.innerHTML =response.gust_mph 
            gust_kph.innerHTML =response.gust_kph 
        })
    .catch((err) => console.error(err));
}

submit.addEventListener("click",()=>{
    event.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")