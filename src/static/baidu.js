console.log('baidu-inject', window.$)

// 正常的js,可以访问宿主环境的变量。但是无法访问chrome.xxx api
// console.log(chrome.runtime.getURL('baidu.js')) 无法访问

const a = new Function(`console.log('new Function -> code')`)

a()