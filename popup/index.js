let button = document.getElementById("injectMeme");

if (button) {
  button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "meme" });
  });
}

let button2 = document.getElementById("deleteBody");

if (button2) {
  button2.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "delete" });
  });
}
