// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '730dc38346msh3914e1502a0398dp1f6a7cjsn31dd0b98d917',
// 		'X-RapidAPI-Host': ' weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// const getweather=(city)=>{
// 	cityName.innerHTML=city
// fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
// .then(response=>response.json())
// .then((response)=>{
// 	console.log(response)
// 	cloud_pct.innerHTML=response.cloud_pct
// 	temp.innerHTML=response.temp
// 	temp2.innerHTML=response.temp
// 	feels_like.innerHTML=response.feels_like
// 	humidity.innerHTML=response.humidity
// 	humidity2.innerHTML=response.humidity
// 	min_temp.innerHTML=response.min_temp
// 	max_temp.innerHTML=response.max_temp
// 	wind_speed.innerHTML=response.wind_speed
// 	wind_speed2.innerHTML=response.wind_speed
// 	wind_degrees.innerHTML=response.wind_degrees
// 	sunrise.innerHTML=response.sunrise
// 	sunset.innerHTML=response.sunset
// 	})
// .catch(err=>console.error(err));
// }

// submit.addEventListener("click",(e)=>{
// 	e.preventDefault()
// 	getweather(city.value);

// })
//getweather("Delhi")
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "730dc38346msh3914e1502a0398dp1f6a7cjsn31dd0b98d917",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = async (city) => {
  cityName.innerHTML = city;
  await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // Populate data in the main section
      cloud_pct.textContent = response.cloud_pct;
      temp.textContent = response.temp;
      temp2.textContent = response.temp;
      feels_like.textContent = response.feels_like;
      humidity.textContent = response.humidity;
      humidity2.textContent = response.humidity;
      min_temp.textContent = response.min_temp;
      max_temp.textContent = response.max_temp;
      wind_speed.textContent = response.wind_speed;
      wind_speed2.textContent = response.wind_speed;
      wind_degrees.textContent = response.wind_degrees;
      sunrise.textContent = response.sunrise;
      sunset.textContent = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// Initial call with a default city
getWeather("Delhi");

const lis = document.querySelectorAll(".text-start");
const list = [...lis].map((ele)=>ele.innerHTML);

const res = async (city) => {
    const h = {
        headers: {
			"X-RapidAPI-Key": "730dc38346msh3914e1502a0398dp1f6a7cjsn31dd0b98d917",
			"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
		},
    };

    try {
        const respons = await axios.get(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`+ city, h);
        return respons.data; 
    } catch (error) {
        console.error(error);
    }
};

list.forEach(async (ele)=>{
	const resp = await res(ele);

	console.log(ele,resp);
	let _ele = ele.replace(/\s+/g, '');

    document.querySelector(`#${_ele} .cloud_pct`).innerText = resp.cloud_pct;
	document.querySelector(`#${_ele} .feels_like`).innerText = resp.feels_like;
	document.querySelector(`#${_ele} .humidity`).innerText = resp.humidity;
	document.querySelector(`#${_ele} .max_temp`).innerText = resp.max_temp;
	document.querySelector(`#${_ele} .min_temp`).innerText = resp.min_temp;
	document.querySelector(`#${_ele} .sunrise`).innerText = resp.sunrise;
	document.querySelector(`#${_ele} .sunset`).innerText = resp.sunset;
	document.querySelector(`#${_ele} .temp`).innerText = resp.temp;
    document.querySelector(`#${_ele} .wind_degrees`).innerText = resp.wind_degrees;
	document.querySelector(`#${_ele} .wind_speed`).innerText = resp.wind_speed;
});




