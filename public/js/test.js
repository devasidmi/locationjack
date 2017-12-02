navigator.geolocation.getCurrentPosition(success, error);

function error(){
    window.console.log("error!");
}

function success(position) {
    const coord = {"lat":"","long":""};
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    coord.lat = latitude;
    coord.long = longitude;
    window.console.log(coord);
} 