import Header from "./components/Header"
import KpopGrid from "./components/KpopGrid"
import { posts } from "./data/posts"
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <KpopGrid posts={posts} />
    </div>
  )
}

export default App
