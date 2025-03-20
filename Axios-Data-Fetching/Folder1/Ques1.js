//Condition: Make a GET request to https://jsonplaceholder.typicode.com/posts and log the response.
import axios from 'axios'
const postUrl = 'https://jsonplaceholder.typicode.com/posts/5';

const getData = async () => {
  const response = await axios.get(postUrl);
  return response.data
}
const getData1 = async () => {
  const data = await fetch(postUrl)
  const result = await data.json();
  return result;
}


// setTimeout(() => {
//   getData().then(value => console.log(value)).catch(error => console.log(error))
// }, 2000)

setTimeout(() => {
  getData1().then(value => console.log(value)).catch(error => console.log(error))
}, 5000)