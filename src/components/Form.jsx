export default function Form({ input, setInput, handleUpdate }) {
    return (
        <form onSubmit={handleUpdate}>
            <input
                type="text"
                placeholder='Nombre de usuario'
                value={input}
                onChange={e => setInput(e.target.value)} />
            <button className='btn' type='submit'>Buscar</button>
        </form>
    )
}
