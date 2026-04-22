// https://api.apileague.com/retrieve-random-meme?api-key=8c95967184204b52af0dc4eb2a0595e6&query=funny
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${selectedValue}`;
// ✅ სწორი


async function changeMeme() {
    const apiKey = '8c95967184204b52af0dc4eb2a0595e6';
    const apiUrl = 'https://corsproxy.io/?https://api.apileague.com/retrieve-random-meme?';
    
    const response = await fetch(apiUrl, { headers: {'x-api-key': apiKey}});
    const data = await response.json();
    console.log(data);
        document.querySelector(".memeImgs").src = data.url;
    

}
changeMeme();
 
