console.log(`content-script.js`)



/**
 * 接受信息
 * 传入的时候需要指定tab,因为content-script可能植入了多个tab
 * chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 给当前激活的tab发一个消息
		chrome.tabs.sendMessage(tabs[0].id as number,{number: 1},(response) => {
				console.log(
					`background -> content script infos have been received. number: ${response.number}`
				);
		});
	});
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(`content-js`)
  sendResponse({number: 998})
  // if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' })
})
