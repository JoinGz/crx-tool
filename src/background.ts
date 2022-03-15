const str: string = 'Gz'

console.log(str + `background.js被执行了`)

// chrome.storage.sync.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });

chrome.contextMenus.create({
  title: '编辑此页面',
  id: 'sampleContextMenu',
})

chrome.contextMenus.onClicked.addListener((clickData, tab) => {
  console.log(clickData, tab)
  chrome.scripting.executeScript({
    target: { tabId: <number>tab?.id },
    func: fn,
  })
})

declare interface Window {
  $: any
}

function fn() {
  // document.body.contentEditable = 'true'
  console.log(window.$)
  // console.log(document.body)
  const div = document.createElement('div')
  div.innerHTML = 'test'
  div.addEventListener('click', () => {
    console.log(`window---`)
    console.log(window.$)
    console.log(`window---`)
    console.log('div clicked')
  })

  document.body.appendChild(div)
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`

  console.log(`我收到了消息-background.js`, message, sender)
  if (message === 'get-user-data') {
    sendResponse('user-background.js')
  } else {
    sendResponse('void')
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 给当前激活的tab发一个消息
    if (tabs.length && !tabs[0].url?.startsWith(`chrome-extension://`)) {
      chrome.tabs.sendMessage(
        tabs[0].id as number,
        { number: 1 },
        (response) => {
          console.log(
            `background -> content script infos have been received. number: ${response?.number}`
          )
        }
      )
    }
  })
})
