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
    document.getElementById("error").className = "error-true";
    return false;
  }
  document.getElementById("error").className = "error-false";

  response = await fetch("http://127.0.0.1:8000/download?url="+url);

  console.log(response);
  
}