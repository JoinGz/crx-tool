import '../common/base.css'

// 更多按钮
const moreBtn = document.querySelector('#moreBtn')

moreBtn?.addEventListener('click', () => {
  chrome.tabs.create({ url: './options.html' })
})

//

const deletedZbjLabel = document.querySelector(
  `input[name="deletedZbj"][type="radio"][value="1"]`
) as HTMLInputElement
const dontDelZbjLabel = document.querySelector(
  `input[name="deletedZbj"][type="radio"][value="0"]`
) as HTMLInputElement

const inputLabel = document.querySelector('.deletedZbjDiv')

inputLabel?.addEventListener('click', (e) => {
  const dom = e.target as HTMLInputElement
  if (dom.name === 'deletedZbj') {
    chrome.storage.sync.set({ deletedZbj: dom.value }, function () {
      console.log('Value is set to ' + dom.value)
    })
  }
})

// console.log(deletedZbjLabel)
// console.log(dontDelZbjLabel)

chrome.storage.sync.get(['deletedZbj'], function (result) {
  console.log('Value currently is ' + result.deletedZbj)
  if (result.deletedZbj === '1') {
    deletedZbjLabel.checked = true
  } else if (result.deletedZbj === '0') {
    dontDelZbjLabel.checked = true
  }
})

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true }
  let [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

// 注入js

const injectJSBtn = document.querySelector('#injectJS')
injectJSBtn?.addEventListener('click', async () => {
  // console.log('clicked')
  const tab = await getCurrentTab()
  // console.log('clicked', tab)

  // chrome.scripting.executeScript({
  //   target: { tabId: tab?.id as number },
  //   func: () => {
  //     console.log(`inject-js`)
  //     console.log(window.$)
  //   },
  // })

  // *******************************************

 

  chrome.scripting.executeScript({
    target: { tabId: tab?.id as number },
    func: () => {
      const s = document.createElement('script')
      const url = chrome.runtime.getURL('baidu.js')
    
    
      s.setAttribute(
        'src',
        url
      )
      document.documentElement.appendChild(s)
    },
  })

  console.log('over')
})

export {}
