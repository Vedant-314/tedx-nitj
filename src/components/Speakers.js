import React, { useEffect } from 'react'
import './Team.css'
import SpeakerCard from './SpeakerCard'
import { useState } from 'react'
export const Speakers = () => {
  const [speakers, setSpeakers] = useState([{}])
  useEffect(() => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://tedx.cyclic.app/api/speakers/get", requestOptions)
      .then(response => response.json())
      .then(result => setSpeakers(result))
      .catch(error => console.log('error', error));

  }, [])
  // let speakerObject = JSON.parse(speakers)
  return (
    <div className='speakers'>

      <div class="SpeakerCarousel__TableContainer-sc-tve874-0 jbNFLs">
        <div className='carousel__heading speakers__heading'>
          <h3>SPEAKERS</h3>
        </div>
        <div class="SpeakerCarousel__Carousel-sc-tve874-2 fRhUJv">
          {speakers && speakers.map(speaker => (
            <SpeakerCard
              name={speaker.name}
              position={speaker.title}
              source={speaker.imageURL}
              description={speaker.description}
              twitter={speaker.twitter}
              insta = {speaker.instagram}
              linkedIn = {speaker.linkedin}
            />
          ))}







        </div>
      </div>
      {/* <Event/> */}
    </div>
  )
}
