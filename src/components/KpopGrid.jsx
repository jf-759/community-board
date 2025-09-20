import KpopCard from "./KpopCard"
import "./KpopGrid.css"

const KpopGrid = ({ posts }) => {
    return (
        <div className="kpop-grid">
            {posts.map(post => (
                <KpopCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default KpopGrid