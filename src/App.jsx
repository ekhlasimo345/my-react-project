import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function app() {

  return (
    <>
    <h1>Hello world</h1>
    <section>
      <Counter title="cardio session" />
      <Counter title="weight session" />
      <Counter/>


    </section>
    </>
  )
}

export default app
