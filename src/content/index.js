setInterval(function () {
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
