import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps){

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){

    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/81433910?s=400&u=5ef6efc69c304a6367a5e55efe7e82b465281bd5&v=4" alt=""/>

      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Bertemes</strong>
              <time title="18 de agosto às 17:12h" dateTime="2023-01-10 17:12:23">Cerca de 1h atras</time>
            </div>
            <button onClick={handleDeleteComment} title="deletar comentario">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}