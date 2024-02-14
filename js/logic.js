function checkUrl(url){
  if(!url){
    return false
  }

  if(url.includes("youtube.com")){
    return true
  }
  return false
}


async function downloadVideo(url){

  if(checkUrl(url) == false){
    document.getElementById("output").className = "red";
    document.getElementById("output").innerText = "The URL is invalid";
    return false;
  }
  document.getElementById("output").className = "white";
  document.getElementById("output").innerText = "Downloading...";

  fetch("http://127.0.0.1:8000/download?url="+url)
  .then(response => response.json())
  .then(data => {
    if(data.message == "Download was successful"){
      document.getElementById("output").className = "green";
    }
    else{
      document.getElementById("output").className = "red";
    }
      document.getElementById("output").innerText = data.message;
  })
  .catch(error => {
    console.log("Error", error);
  })
  
}