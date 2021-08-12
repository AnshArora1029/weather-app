// console.log('Starting')

// setTimeout(()=> {
//     console.log('Im 2 second setTimout')
// }, 2000)

// setTimeout(()=> {
//     console.log('Im 0 second setTimout')
// }, 0)

// console.log('Ended')                                        // Asynchronous example


const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=ec99e464d93184095d4b8f51ec0594ef&query=37.8267,-122.4233&units=f'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/mumbai.json?access_token=pk.eyJ1IjoiYW5zaGFyb3JhIiwiYSI6ImNrczh2aXI2bzFlaXUyb3MzMjMzcXZ3NDYifQ.hcAK-5uOCyd4y7LliWQN2g&limit=1'
// request({ url : url, json : true},(error, response)=> {
//     if(error){
//         console.log('Unable to connect to weather service')
//     } else if(response.body.error.code = 601){
//         console.log('Enter Location')
//     }
//      else {
//         console.log('The temperature is ' + response.body.current.temperature + ' degree and there is ' + response.body.current.precip + '% chances of rain')
//     console.log(response.body.current.weather_descriptions[0] + '. The temperature outside is ' + response.body.current.temperature + ' degrees but feels like ' + response.body.current.feelslike + ' degrees')
//     }
// })

// request({ url : urlLatLong, json : true},(error, response)=> {
//     if(error) {
//         console.log('Unable to connect to Co-ordinate web service')
//     }  else if(response.body.message) {
//         console.log('Enter Location')
//     } else if(response.body.features.length === 0) {
//         console.log('Enter Valid Location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude)
//         console.log(longitude)
//     }
// })



const geocode = (address, callback)=> {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5zaGFyb3JhIiwiYSI6ImNrczh2aXI2bzFlaXUyb3MzMjMzcXZ3NDYifQ.hcAK-5uOCyd4y7LliWQN2g&limit=1'

    request({ url = url, json = true}, (error, response)=> {
        if(error) {
            callback('Unable to connect to Co-ordinate web service', undefined)
        } else if(response.body.features.length === 0) {
            callback('Invalid Location. Search something else', undefined)
        } else {
            callback(undefined, {
                latitude = response.body.features[0].center[1],
                longitude = response.body.features[0].center[0],
                name = response.body.features[0].place_name
            })
        }
    })
}

geocode('mumbai', (error, data)=> {

})