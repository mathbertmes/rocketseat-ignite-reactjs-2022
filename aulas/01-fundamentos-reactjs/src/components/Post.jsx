import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }){

  const [comments, setComments] = useState([
    "Post Interessante!"
  ])

  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
    locale : ptBR,
    addSuffix : true
  })

  function handleSetNewComment(){
    event.preventDefault()
    
    setComments([...comments, newCommentText])

    setNewCommentText("")
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)
  } 

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        
        {content.map(line => {
          return(
            line.type === "paragraph" ? <p key={line.content}>{line.content}</p> : <p key={line.content}><a href="#">{line.content}</a></p>
          )
        })}
        
      </div>

      <form onSubmit={handleSetNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentario"
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment}/>
        })}
      </div>
    </article>
  )
}