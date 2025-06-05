import React from 'react'

function Hero({ currentWeather, threeDayForecast }) {
 const getIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };
 const getDay = (dt) => {
    const date = new Date(dt * 1000);
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  };


const Weather = () => {
  return (
    <div className='container pt-5 '>
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
<div>
 <h3 className='text-2xl font-semibold mb-5 text-#61dafb'>3-Days Forecast</h3>
  <div className='flex flex-wrap justify-around gap-5 '>{threeDayForcast.map((dayDate, index) => (
       <div key={index} className="bg-[#5b6068] p-5 rounded-lg text-center flex-1 min-w-[150px] shadow-sm ">
         <p className="font-bold text-lg mb-2 text-white ">{getDay(dayData.dt)}</p>    <img src={getIcon(dayData.weather[0].icon)} alt="Forecast icon" className="w-16 h-16 mx-auto my-1" />
         <p className="text-lg font-bold mb-1 text-white ">  {Math.round(dayData.main.temp_max)}°C / {Math.round(dayData.main.temp_min)}°C  </p>
         <p className="text-base capitalize text-gray-300 ">
              {dayData.weather[0].description}
         </p>
         </div>
  ))}</div>
</div>

    </div>
  )
}
}

export default Weather