export default function Card({user}) {    
    return (
        <div className='card'>
            <img src={null || user.image} alt={null || user.name} />
            <h2>{user.name || user.username}</h2>
            <p><span>Nombre de usuario:</span> {null || user.username}</p>
            <p><span>Seguidores:</span> {null || user.followers}</p>
            <p><span>Repositorios públicos:</span> {null || user.public_repos}</p>
        </div>
    )
}