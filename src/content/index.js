chrome.runtime.onMessage.addListener(async function (message, _sender, sendResponse) {
  if (message?.type === 'start-wl') {
    let watchListRemoval = setInterval(function () {
      document.querySelector('#primary button[aria-label="Action menu"]')?.click()
      const things = document.evaluate(
        '//span[contains(text(),"Remove from")]',
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null,
      )

      for (let i = 0; i < things.snapshotLength; i++) {
        things?.snapshotItem(i)?.click()
      }
    }, 1000)
    sendResponse(watchListRemoval)
  } else if (typeof message.type === 'number') {
    if (message?.type) {
      console.log(message.type)
      clearInterval(message.type)
    }
    sendResponse('end')
  }
})
