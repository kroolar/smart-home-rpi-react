import React, { useState } from 'react'
import { Button } from '..'

const Offline = () => {
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)

    setTimeout(() => window.location.reload(), 3000)
  }

  return (
    <div className="offline">
      <p className="offline__text">
        You are offline
      </p>

      <img
        alt="offline"
        className="offline__illustration"
        src="../illustrations/no-signal.svg"
      />

      <Button
        onClick={handleLoading}
        loading={loading}
        text="Reload"
      />
    </div>
  )
}

export default Offline
