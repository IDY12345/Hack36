import React from 'react'
import './CarbonCredits.css'
import Graph from './Graph'
import MapContainer from './MapContainer'
function CarbonCredits() {
  return (
    <div className='Carbon-Credits-Page'>
      <div className='Carbon-logo'>
        <img src='Assets\carbon_credits1-removebg-preview.png' alt='' className='Logo-Carbon' />
        <p className='CC-1'>Carbon Credits</p>
      </div>
      <div className='Carbon-Credits-Info-div'>
        <p className='Carbon-Credits-Info'>The main goal of carbon
          credits and markets is to
          mitigate the growth of the
          concentration of greenhouse
          gas (GHC) in the
          environment. Carbon credits
          and carbon markets are a
          component of national and
          international attempts to save
          the Earth and Environment
          from pollution. There are
          also many companies that sell
          carbon credits to commercial
          and individual customers
          who are interested in
          lowering their carbon
          footprint on a voluntary
          basis.</p>
      </div>
      <div>
        <img src='Assets\collage-sustainability-factories-concept.jpg' alt='' className='Factory-Image'/>
      </div>
      <div className='Carbon-Credits-Info-div'>
        <p className='Carbon-Credits-Info'>A carbon credit is a generic term for any
tradable certificate or permits representing
the right to emit one tonne of carbon dioxide
or the equivalent amount of different
greenhouse gas.</p>
      </div>
      <Graph />
    </div>
  )
}

export default CarbonCredits