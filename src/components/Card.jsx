
export default function Card({ user }) {
    return (
        <div className='card'>
            <h2>{user.name}</h2>
            <img src={null || user.image} alt={null || user.name} />
            <p>Nombre de usuario: {null || user.username}</p>
            <p>Seguidores: {null || user.followers}</p>
            <p>Repositorios públicos: {null || user.public_repos}</p>
        </div>
    )

}