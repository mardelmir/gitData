import './App.css'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useFetchUser } from './hook/useFetchUser.js';
import Form from './components/Form.jsx';
import Card from './components/Card.jsx';

export default function App() {
  const [input, setInput] = useState('')
  const [url, setUrl] = useState(null)

  const user = useSelector(state => state.user)
  const { loading, error } = useFetchUser(url)

  const handleUpdate = (e) => {
    e.preventDefault()
    const username = input.trim()
    const searchUrl = `https://api.github.com/users/${username}`
    setUrl(searchUrl)
    setInput('')
  }

  return (
    <>
      <h1>Buscador de usuarios</h1>
      <Form input={input} setInput={setInput} handleUpdate={handleUpdate} />
      {error
        ? <h3>{error}</h3>
        : user.length !== 0 && (loading
          ? <h2>Loading...</h2>
          : <Card user={user} />)}
    </>
  );
}