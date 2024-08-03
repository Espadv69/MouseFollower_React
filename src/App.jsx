import { useState } from 'react'

import { FollowMouse } from './components/FollowMouse'

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <>
      { mounted && <FollowMouse /> }
      <button style={{ marginTop: 10 }} onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button>
    </>
  )
}

export default App
