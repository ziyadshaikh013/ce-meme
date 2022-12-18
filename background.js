chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (message?.type === "meme") {
      chrome.tabs.sendMessage(tabs[0].id, { type: "meme" });
    }

    if (message?.type === "delete") {
      chrome.tabs.sendMessage(tabs[0].id, { type: "delete" });
    }
  });
});
