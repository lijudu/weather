import './styles.css'

let city = ""
let lat = ""
let lon = ""

city = 'Vancouver'

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
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=df6a91bfdf395d8590174317cd545762`, {mode: 'cors'})
            .then(res => res.json())
            .then(data => {
                console.log('temperature is ' + Math.round((data.main.temp - 273.15)))
                console.log(data)
            })
            .catch(e => {
                console.log(e)
            })
    })


// fetch('http://api.openweathermap.org/data/2.5/weather?lat=49.2608724&lon=-123.113952&appid=df6a91bfdf395d8590174317cd545762', {mode: 'cors'})
//     .then(function(response){
//         console.log(response.json())
//     })
//     .catch(e => {
//         console.log(e)
//     })
    // df6a91bfdf395d8590174317cd545762


    
console.log('hello')