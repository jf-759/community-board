import "./KpopCard.css"

const KpopCard = ({ post }) => {
    return (
        <div className="kpop-card">
            <img src={post.image} alt={post.title} className="kpop-card-image" />
            <div className="kpop-card-content">
                <h3>{post.title}</h3>
                <p><strong>Group:</strong>{post.group}</p>
                <p>{post.description}</p>
                <p className="date">{post.date}</p>
            </div>
        </div>
    )
}

export default KpopCard