import React from 'react'
import { useParams } from 'react-router-dom'
export default function CandleDetails() {
    const params = useParams()
    const candleId = params.candleId
  return (
    <div>Candle Details {candleId}</div>
  )
}
