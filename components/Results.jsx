import React from 'react'
import requests from '../utils/requests'
import Thumbnail from './Thumbnail'

function Results({ results }) {
  return (
    <div>
      {results.map((res) => (
        <Thumbnail key={res.id} result={res} />
      ))}
    </div>
  )
}

export default Results
