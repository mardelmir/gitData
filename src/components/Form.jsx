export default function Form({ input, setInput, handleUpdate }) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input className='input' type="text" placeholder='Search user' value={input} onChange={e => setInput(e.target.value)} required />
            <button className='button' onClick={handleUpdate}>Buscar</button>
        </form>
    )

}
