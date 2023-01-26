import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/81433910?s=400&u=5ef6efc69c304a6367a5e55efe7e82b465281bd5&v=4" alt="" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Bertemes</strong>
              <time title="18 de agosto às 17:12h" datetime="2023-01-10 17:12:23">Cerca de 1h atras</time>
            </div>
            <button title="deletar comentario">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}