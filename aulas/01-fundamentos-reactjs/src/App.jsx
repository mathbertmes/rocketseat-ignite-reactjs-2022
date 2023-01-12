import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'
import "./styles.css"

function App() {

  return (
    <div>
      <Header />
      <Post   
      author="Matheus Bertemes" 
      content="Teste propriedades componentes"/>

      <Post   
      author="Gustavo" 
      content="Novo Post"/>
    </div>
  )
}

export default App
