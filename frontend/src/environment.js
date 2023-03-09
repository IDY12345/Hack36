import {axios} from 'axios'

const options = {
  method: 'POST',
  url: 'https://mca-corporate-verifications1.p.rapidapi.com/MCA/Detailed_search',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '29717588cfmsh916d1d53a068ff3p1608c6jsnedb4c5bba96a',
    'X-RapidAPI-Host': 'mca-corporate-verifications1.p.rapidapi.com'
  },
  data: '{"method":"CINvalidate","txn_id":"609f5942-9c57-4f45-8b61-6baf76c86d54","clientid":"RapidAPI_MCA","cin":"<Input CIN Number>"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});