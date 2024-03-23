export const environment = {
    url: getUrl()
}

function getUrl(){
    let host = window.location.origin;
    let apiUrl = ""
    if(host.includes('local')){
        apiUrl = "http://localhost:3000"
    }else{
        apiUrl =  "https://my-json-server.typicode.com/madhur71/ecomserver"
    }
    return apiUrl
}