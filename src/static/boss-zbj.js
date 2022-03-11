let time = 0;
let rId;

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
    if (time > 60 * 5) { // 5s 60hz 
      cancelAnimationFrame(rId)
      return
    }
    rId = requestAnimationFrame(deletedModal)
  }
}

// deletedModal()

chrome.storage.sync.get(['deletedZbj'], function(result) {
  console.log('Value currently is ' + result.deletedZbj);
  if (result.deletedZbj === '1') {
    deletedModal()
  }
});
