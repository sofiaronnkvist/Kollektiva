import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div>
      <ReactPlayer playing url="/kollektiva.mp4" width="900px" height="100%" />
    </div>
  )
}

export default Video
