document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "AIzaSyB3pJpnRMuRMnaqYW8SEVcGYDdP0oR3w7Q";
  const CHANNEL_ID = "UC3SAwPDkdknh7p1lwyMwetQ";
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const latestVideoId = data.items[0].id.videoId;
      const iframe = document.getElementById("latestVideo");
      iframe.src = `https://www.youtube.com/embed/${latestVideoId}`;
    })
    .catch((error) => console.error("Error fetching latest video:", error));
});
