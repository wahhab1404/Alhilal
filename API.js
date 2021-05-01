fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?team=2932&next=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9c7755bd2fmsh6e27158abfce69fp19f018jsn199aa77dad05",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data =>{
    let matchDiv =document.createElement('div')
    console.log(data)
    for(i=0; i< 6; i++){
    document.getElementById('t-home'+i).innerHTML  = data.response[i].teams.home.name
    document.getElementById('t-away'+ i).innerHTML  = data.response[i].teams.away.name
    document.getElementById('date'+i).innerHTML  = data.response[i].fixture.date
    document.getElementById('league-'+i).innerHTML  = data.response[i].league.name
    document.getElementById('plg-'+i).innerHTML  = data.response[i].fixture.venue.name
    document.getElementById('th-logo-'+[i]).src= data.response[i].teams.home.logo
    document.getElementById('ta-logo-'+[i]).src= data.response[i].teams.away.logo
    if(document.getElementById('league-'+i).innerHTML  = 'Pro League'){
        document.getElementById('league-'+i).innerHTML  = 'دوري محمد بن سلمان'
    };
    }
    
})
