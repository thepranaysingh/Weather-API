// var h1= document.querySelector('h1');
// var h2= document.querySelector('h2');
// var btn= document.querySelector('button');
// var jokes=document.querySelector('#jokes');
// btn.addEventListener("click",function(){

// const dadjoke= async() =>{
//     const config={headers: {Accept : 'application/json'}}
//     const res=await axios.get('https://icanhazdadjoke.com/',config);
   
//     const newel=document.createElement('li');
//     newel.append(res.data.jokes);
//     jokes.append(newel)
// }
// })
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var btn = document.querySelector('button');
var jokes = document.querySelector('#jokes');

btn.addEventListener("click", function () {
  const dadjoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    try {
      const res = await axios.get('https://icanhazdadjoke.com/', config);
      const newel = document.createElement('li');
      newel.textContent = res.data.joke; // Use "joke" instead of "jokes"
      jokes.appendChild(newel); // Use "appendChild" instead of "append"
    } catch (error) {
      console.error(error);
    }
    };

  dadjoke(); // Call the dadjoke function to make the request and add the joke
});