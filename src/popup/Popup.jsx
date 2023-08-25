import { useEffect, useState } from 'preact/hooks'

import './Popup.css'

export const Popup = () => {
  const [watchLater, setWatchLater] = useState(false)
  const [intervalId, setIntervalId] = useState(false)
  const [tab, setTab] = useState(null)
  const getType = (wl) => (wl ? 'start-wl' : intervalId)

  const getCurrentTab = async () => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    setTab(tabs[0])
  }

  const isYoutube = (url) => {
    console.log(url)
    return url === 'https://www.youtube.com/playlist?list=WL'
  }

  useEffect(() => {
    getCurrentTab()
  }, [])

  const handleClick = async (_event) => {
    const response = await chrome.tabs.sendMessage(tab.id, { type: getType(!watchLater) })
    if (response !== 'end') {
      setIntervalId(response)
    }
    setWatchLater(!watchLater)
  }

  return (
    <main>
      <h3>Browser tools</h3>
      <div className="container">
        <div className={`field ${isYoutube(tab?.url) ? '' : 'disabled-field'}`}>
          <input
            disabled={!isYoutube(tab?.url)}
            checked={watchLater}
            onClick={handleClick}
            type="checkbox"
            id="switch"
          />
          <label for="switch">{watchLater ? 'stop' : 'start'} watch later removal</label>
        </div>
      </div>
    </main>
  )
}

export default Popup
