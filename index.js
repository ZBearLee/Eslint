"use strict"
const weather = new Promise((resolve) => {  //异步变同步
	setTimeout(() => {
		resolve({ temp: 36, conditions: "Sunny with Clouds" })
	}, 2000)
})

const tweets = new Promise((resolve) => {
	setTimeout(() => {
		resolve({ temp: 29, conditions: "BBQ is so good" })
	}, 500)
})


/* weather.then(() => {

}) */
//多个用.all方法  一次性地去处理多个异步
Promise.all([weather, tweets])
	.then(responses => {
		//console.log(responses[0],responses[1])
		const [weatherInfo,tweetInfo] = responses
		console.log(weatherInfo,tweetInfo)
	})
	
const postsPromise=fetch("http://wesbos.com/wp-json/wp/v2/posts")
const StreetCarsPromise=fetch("http://data.ratp.fr/api/datasets/1.0/search/?q=paris")

//fetch就是promise的实例，是一个局域ajax的实例
//ajax请去返回的数据是二进制的数据块，要转换成json
Promise.all([postsPromise,StreetCarsPromise])
	.then(responses => {
		//console.log(responses[0])
		return Promise.all(responses.map(response=>response.json()))
		//遍历每一个responses
	})
	.then(responses =>{
		//console.log(responses)
		const [postInfo,carsInfo] = responses
		console.log([postInfo,carsInfo])
	})   //return Promise.all 返回了一个Promise对象，所以可以再.then