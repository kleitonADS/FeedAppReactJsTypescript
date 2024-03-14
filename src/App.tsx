
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'


const posts: PostType[] = [
  {
    id:1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/16235503?v=4',
      name:'Kleiton Azevedo',
      role: 'Frontend Developer'
    },
    content:[
      { type: 'paragraph', content:'Fala galera,'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio.,'},
      { type: 'link', content:'https://github.com/kleitonADS,'},
    ],
    publishedAt: new Date('2024-01-04 14:00:00'),
  },

  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name:'Diego Fernandes',
      role: 'CTO @RocketSeat',
    },
    content:[
      { type: 'paragraph', content:'Fala galera,'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio.,'},
      { type: 'link', content:'https://github.com/kleitonADS,'},
    ],
    publishedAt: new Date('2024-03-01 14:30:00'),
  }
]

export function App() {

  return (
   <div>
    <Header/>
    <div className={styles.wrapper}>
    <Sidebar/>
  
    <main>
      {posts.map(post =>{
        return (
          <Post 
          key={post.id}
          post={post}
        />
        )    

      })}
    </main>
    </div>
   </div>
  )
}


