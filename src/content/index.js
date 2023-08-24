// setInterval(function () {
//   document.querySelector('#primary button[aria-label="Action menu"]').click()
//   const things = document.evaluate(
//     '//span[contains(text(),"Remove from")]',
//     document,
//     null,
//     XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
//     null,
//   )
//   for (const i = 0; i < things.snapshotLength; i++) {
//     things.snapshotItem(i).click()
//   }
// }, 500)

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  let watchListRemoval
  switch (message.type) {
    case 'start-wl': {
      if (!watchListRemoval) {
        watchListRemoval = setInterval(function () {
          document.querySelector('#primary button[aria-label="Action menu"]')?.click()
          const things = document.evaluate(
            '//span[contains(text(),"Remove from")]',
            document,
            null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null,
          )
          // if (things) {
          for (const i = 0; i < things.snapshotLength; i++) {
            things?.snapshotItem(i)?.click()
          }
          // }
        }, 5000)
      }
      sendResponse('STARTED')

      break
    }
    case 'stop-wl': {
      if (watchListRemoval) {
        console.log(message, watchListRemoval)
        clearInterval(watchListRemoval)
        watchListRemoval = null
      }
      sendResponse('STOPPED')
      break
    }
  }
})
