// const website = 'https://www.youtube.com/playlist?list=WL'

// chrome.action.onClicked.addListener(async (tab) => {
//   if (tab.url === website) {
//     console.log(tab.url)
//     // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//     const prevState = await chrome.action.getBadgeText({ tabId: tab.id })
//     // Next state will always be the opposite
//     const nextState = prevState === 'ON' ? 'OFF' : 'ON'
//     // Set the action badge to the next state
//     await chrome.action.setBadgeText({
//       tabId: tab.id,
//       text: nextState,
//     })

//     if (nextState === 'ON') {
//       // await chrome.scripting.executeScript({
//       //   target: { tabId: tab.id },
//       //   files: ['src/content/index.js'],
//       // })

//       const timerid = setInterval(function () {
//         document.querySelector('#primary button[aria-label="Action menu"]').click()
//         const things = document.evaluate(
//           '//span[contains(text(),"Remove from")]',
//           document,
//           null,
//           XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
//           null,
//         )
//         for (const i = 0; i < things.snapshotLength; i++) {
//           things.snapshotItem(i).click()
//         }
//       }, 500)
//     }

//     if (nextState === 'OFF') {
//       // await chrome.scripting.
//       clearInterval()
//     }
//   }
// })
