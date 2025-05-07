const axios = require('axios');
async function fetchData() {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:
        'https://pokeapi.co/api/v2/ability/?limit=20&offset=20',
        headers: { }
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data)
        );
        })
    .catcch((erro) => {
        console.log(error);
    });
}