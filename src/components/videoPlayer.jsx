import React from 'react'

const VideoPlayer = () => {
  return (
    <div>
      <div>
      <video controls className=' w-full'>
        <source src="https://player.vimeo.com/external/518539106.sd.mp4?s=d16b04145e98f03df4355066d6d0b03f664dfa9d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  )
}

export default VideoPlayer
