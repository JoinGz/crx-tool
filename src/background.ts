const str: string = 'Gz'

console.log(str)

// chrome.storage.sync.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });

chrome.contextMenus.create(
  {
    title: '编辑此页面',
    id: 'sampleContextMenu',
  }
)

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
