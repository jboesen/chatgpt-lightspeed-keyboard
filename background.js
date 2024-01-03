function handleInterrupt() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ["contentScript.js"]  
    });

  });
}

function handleSwitchModel(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  
    chrome.tabs.update(tabs[0].id, {url: url}); 

  });
}

chrome.commands.onCommand.addListener(function(command) {

  switch (command) {
    case "switch3":
      handleSwitchModel("https://chat.openai.com/?model=text-davinci-002-render-sha");
      break;
    case "switch4":
      handleSwitchModel("https://chat.openai.com/?model=gpt-4");
      break;
    case "switchPlugins":
      handleSwitchModel("https://chat.openai.com/?model=gpt-4-plugins");
      break;
    case "interrupt":
      handleInterrupt();
      break;
    default:
      break;
  }
});
