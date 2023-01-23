import './styles.css'
import $ from 'jquery'
import { format, utcToZonedTime } from 'date-fns'

let city = ""
let lat = ""
let lon = ""

city = 'vancouver'

// API Fetch/Promise get lat/long of input city, then convert lat/long to weather data 
// df6a91bfdf395d8590174317cd545762
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}}&limit=1&appid=df6a91bfdf395d8590174317cd545762`, {mode: 'cors'})
    .then(function(response) {
        // response
        return response.json()
    })
    .then(function(response){
        console.log('lat ' + response[0].lat)
        console.log('lon ' + response[0].lon)
        return lat=response[0].lat, lon=response[0].lon

    })
    .then(function(response){
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=df6a91bfdf395d8590174317cd545762`, {mode: 'cors'})
            .then(res => res.json())
            .then(data => {
                console.log(data)

                // get weather icon
                const icon = data.weather[0].icon
                // 1) get local time 2) find local timeoffset 3)obtein UTC time 4) obtain city's offset in hours then   
                const dateTime = new Date(data.dt * 1000);
                const toUtc = dateTime.getTime() + dateTime.getTimezoneOffset() * 60000;
                const currentLocalTime = toUtc + 1000 * data.timezone;
                const selectedDate = new Date(currentLocalTime);
               
                const date = selectedDate.toLocaleString("en-US", {
                     day: "numeric",
                     weekday: "long",
                     month: "long",
                });
                const year = selectedDate.toLocaleString("en-GB", {
                     year: "numeric",
                });
                const hour = selectedDate.toLocaleString("en-GB", {
                     hour: "2-digit",
                     minute: "2-digit",
                     hour12: false,
                });
            

                $('#icon-summary').attr('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
                $('#worded-summary').text(data.weather[0].description)
                $('#city').text(city)
                $('#date').text(date + ' ' + year)
                $('#time').text(hour)
                $('#current-temp').text(Math.round((data.main.temp)) + ' deg C' )
            })
            .catch(e => {
                console.log(e)
            })
    })

// Right hand side information 


    
