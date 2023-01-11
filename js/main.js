import {MY_APP_KEY} from './config.js';

document.addEventListener('DOMContentLoaded', () => {
	fetchImage()
})
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': MY_APP_KEY,
		'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
	}
};


fetch('https://k-pop.p.rapidapi.com/boy-groups/random', options)
	.then(response => response.json())
	.then(response => { console.log(response);

		

    document.getElementById('name_search').innerHTML = response.data[0]['Group Name']
    document.getElementById('the_img').scr = response.data[0]['Group Profile']
    document.getElementById('date_debut').innerHTML = 'Date of debute : ' + response.data[0]['Date of Debut']
    document.getElementById('name_company').innerHTML = 'Company name : ' + response.data[0].Company
    document.getElementById('active_situation').innerHTML = 'Active : ' + response.data[0].Active

})

	.catch(err => {
        console.error(err)
    });

	
	function fetchImage() {
		let image = document.getElementById('the_img')
		fetch('https://k-pop.p.rapidapi.com/boy-groups/random', options)
		.then(response => response.json())
		.then(response => image.scr = response.data[0]['Group Profile'])	
	}

	

