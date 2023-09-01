import { useState, useEffect } from "react"
import './App.css';
function App() {
  const [watchLater, setWatchLater] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<number>(0)
  const [tab, setTab] = useState<browser.tabs.Tab>();
  const getType = (wl: boolean) => (wl ? 'start-wl' : intervalId)

  const getCurrentTab = async () => {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    setTab(tabs[0])
  }

  const isYoutube = (url: string): boolean => url === 'https://www.youtube.com/playlist?list=WL'

  useEffect(() => {
    getCurrentTab()
  }, [])

  const handleClick = () => {
    try{if (tab && tab.id) {
      browser.tabs.sendMessage<{ type: string | number | null }, number | string>(tab.id, { type: getType(!watchLater) }).then((response) => {
        if (typeof response === "number") {
        setIntervalId(response)
      }
      setWatchLater(!watchLater)
      })
    }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <h3>Browser tools</h3>
      {tab && tab.id && tab.url && <div className="container">
        <div className={`field ${isYoutube(tab.url) ? '' : 'disabled-field'}`}>
          <input
            disabled={!isYoutube(tab.url)}
            checked={watchLater}
            onClick={handleClick}
            type="checkbox"
            id="switch"
          />
          <label htmlFor="switch">{watchLater ? 'stop' : 'start'} watch later removal</label>
        </div>
      </div>}
    </main>
  )
}

export default App;
