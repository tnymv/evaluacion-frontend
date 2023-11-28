import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  ContadorApp  from './pruebas/prueba01.jsx'
import FormularioApp from './pruebas/prueba02.jsx'
import BlogApp from './pruebas/prueba03.jsx'

function App() {

  return (
    <>
      <ContadorApp />
      <FormularioApp />
      <BlogApp />
    </>
  )
}

export default App
