'use client'
import React from 'react'
import { TailSpin ,Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <TailSpin
    visible={true}
    height="60"
    width="80"
    color="#e0dddd"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    />

)
}

export default Loader
