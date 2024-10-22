import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jihed Berlim"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eius quis dolore eligendi iste molestiae. Corporis a reprehenderit nihil, aliquam nesciunt quaerat. Similique odio asperiores ad reiciendis ipsam vel nesciunt."
          />
          <Post
            author="Victor Eduardo"
            content="Other content"
          />
        </main>
      </div>
    </div>
  )
}

