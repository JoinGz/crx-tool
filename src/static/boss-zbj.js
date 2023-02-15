let time = 0;
let rId;
let onloadReginFn = false;

function deletedModal () {
  const changepwd = document.querySelector('.changepwd-modal')
  if (changepwd) {
    changepwd.parentNode.removeChild(changepwd)
    setTimeout(() => {
      const modal = document.querySelector('.modal-backdrop')
      modal?.parentNode.removeChild(modal)
    }, 20);
  } else {
    time++;
    if (time > 60 * 50) { // 50s 60hz (最大时间，兜底load)
      cancelAnimationFrame(rId)
      return
    }
    rId = requestAnimationFrame(deletedModal)
    if (!onloadReginFn) {
      onloadReginFn = true
      document.addEventListener('load', ()=> cancelAnimationFrame(rId))
    }
  }
}

// deletedModal()

chrome.storage.sync.get(['deletedZbj'], function(result) {
  console.log('Value currently is ' + result.deletedZbj);
  if (result.deletedZbj === '1') {
    deletedModal()
  }
});
