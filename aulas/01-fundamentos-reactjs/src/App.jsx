import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"


function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          <Post />
          <Post />
        </div>   
           
      </div>
    </div>
  )
}

export default App
