// console.log('Starting')

// setTimeout(()=> {
//     console.log('Im 2 second setTimout')
// }, 2000)

// setTimeout(()=> {
//     console.log('Im 0 second setTimout')
// }, 0)

// console.log('Ended')                                        // Asynchronous example






const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
 if(!process.argv[2]) {
    console.log('Please Enter Location name')
 } else {
    geocode(process.argv[2], (error, {latitude, longitude, location} = {})=> {
        if(error){
            return console.log(error)
        }
        //console.log(data)
    
        forecast(latitude,longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })
 }