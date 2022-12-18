const getMemeImage = async () => {
  const res = await fetch("https://meme-api.com/gimme/wholesomememes");
  const data = await res?.json();

  return data;
};
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === "meme") {
    const images = document.querySelectorAll("img");

    if (images?.length > 0) {
      for (let image of images) {
        getMemeImage().then((data) => {
          image.removeAttribute("srcset");
          image.removeAttribute("data-src");
          image.src = data?.url;
        });
      }
    }
  }

  if (message?.type === "delete") {
    const body = document.querySelector("body");

    if (body) {
      body.innerHTML = "";
    }

    body.style.display = "flex";
    body.style.height = "100vh";
    body.style.width = "100vw";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";

    const meme = document.createElement("img");
    meme.src = "https://i.imgflip.com/74pyv1.jpg";
    meme.style.height = "80vh";
    meme.style.width = "80vw";

    body.append(meme);
  }
});
