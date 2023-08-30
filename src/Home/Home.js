import React from 'react'
import HomePage from './HomePage'
import About_me from './About-me/About_me'
import Page1 from './Page1/Page1'
import ContactMe from './ContactMe/ContactMe'
import CoverLetter from './CoverLetter/CoverLetter'

function Home({resetScreen}) {
  return (
    <>
        <HomePage/>
        <About_me/>
        <Page1
          resetScreen = {resetScreen}
        />
        <CoverLetter/>
       
    </>
  )
}

export default Home