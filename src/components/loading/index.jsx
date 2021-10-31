import React from 'react'

const Loading = () => {
  const loadingDots = []

  for (let i = 0; i < 8; i++) {
    loadingDots.push(<div className="loading__dot" key={i} />)
  }

  return (
    <div className="loading">
      <div className="loading__spinner">
        {loadingDots}
      </div>
    </div>
  )
}

export default Loading
