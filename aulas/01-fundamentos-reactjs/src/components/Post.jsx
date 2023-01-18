import styles from "./Post.module.css"

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/81433910?s=400&u=5ef6efc69c304a6367a5e55efe7e82b465281bd5&v=4" alt="" />
          <div className={styles.authorInfo}>
            <strong>Matheus Bertemes</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="18 de agosto às 17:12h" datetime="2023-01-10 17:12:23">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">👉 jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
        
      </div>
    </article>
  )
}