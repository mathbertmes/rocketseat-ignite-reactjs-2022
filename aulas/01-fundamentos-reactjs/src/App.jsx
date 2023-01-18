import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'

import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar />

        <main>
        <Post   
        author="Matheus Bertemes" 
        content="Teste propriedades componentes"/>

        <Post   
        author="Gustavo" 
        content="Novo Post"/>
        </main>
        
      </div>
    </div>
  )
}

export default App
