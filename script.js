// fetch('https://jsonplaceholder.typicode.com/posts/1') //Replace with your API endpoint
//     .then(response =>{
//     //Check if the HTTP request was successful (status code 200)
//     if (!response.ok) {
//         //If not okay, throws the catch method
//         throw new Error('Network response was not ok')
//     }
//     //Parse (or read) the response as JSON
//     return response.json();
//     })
//     .then(data => {
//         //Handle the JSON data
//         console.log('Response data:', data);
//     })
//     .catch(error => {
//         //Handle erros, such as network issues or invalid JSON
//         console.error('Fetch error:', error);
//     })
 
// const axios = require('axios');
// async function fetchData() {
//     let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url:
//         'https://pokeapi.co/api/v2/ability/?limit=20&offset=20',
//         headers: { }
//     };

//     axios.request(config)
//         .then((response) => {
//             console.log(JSON.stringify(response.data)
//         );
//         })
//     .catcch((erro) => {
//         console.log(error);
//     });
// }

function fetchRandomCatImage() {
    const apiUrl =
        'https://cataas.com/cat?json=true';
    
    fetch(apiUrl)
        .then(response =>
            respsonse.json())
        .then(data => {
            // ..
        })
        .catch(error => {
            console.error('Error fetching cat immage:', error);
        });
}

//Call the fetchRandomCatImage function to retreive and log a random cat image.
fetchRandomCatImage();