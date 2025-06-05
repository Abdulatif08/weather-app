import React from 'react'

const Weather = () => {
  return (
    <div className='pt-5 '>
      <div className='bg-#4a4e54 p-6 rounded-b-lg mb-8 '>
        <h2 className='text-3xl font-semibold mb-4 text-white'>
             {currentWeather.name}, {currentWeather.sys.country}
        </h2>
        <div className='flex flex-col items-center mb-5 '>
            <img src="{getIcon(currentWeather.weather[0].icon)}" alt="weather" />
             <p className='text-6xl font-bold text-white '>{Math.round(currentWeather.main.temp)}</p>
             <p className=' text-xl text-gray-300 mt-2 '>{currentWeather.weather[0].description}</p>
        </div>
        <div className='flex flex-wrap justify-around text-lg text-gray-300'>
            <p className='m-2'>Humidity: {currentWeather.main.humidity}%</p>
             <p className="m-2">Wind: {currentWeather.wind.speed} m/s</p>
            <p className="m-2">Pressure: {currentWeather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  )
}

export default Weather
