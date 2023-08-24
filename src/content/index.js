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
        console.log('aaaa')
        watchListRemoval = setInterval(function () {
          document.querySelector('#primary button[aria-label="Action menu"]').click()
          const things = document.evaluate(
            '//span[contains(text(),"Remove from")]',
            document,
            null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null,
          )
          for (const i = 0; i < things.snapshotLength; i++) {
            things.snapshotItem(i).click()
          }
        }, 500)
      }
      sendResponse('watch-later videos are getting removed')

      break
    }
    case 'stop-wl': {
      if (watchListRemoval) {
        clearInterval(watchListRemoval)
        sendResponse('watch-later video removal stopped')
      }

      break
    }
  }
})
