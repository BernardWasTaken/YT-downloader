let url;

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  document.getElementById("url").value = tabs[0].url;
  url = tabs[0].url;
});


document.getElementById("btn").onclick = function () {
  downloadVideo(url);
};