import "../common/base.css"

console.log(`options-被执行了`)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`我收到了消息--options`, message, sender)
  if (message === 'get-user-data') {
    sendResponse('user-options-1.js');
  } else {
    sendResponse(`options-back`)
  }
});

export {}