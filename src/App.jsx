import './App.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from './redux/userSlice.js'
import Form from './components/Form.jsx';
import Card from './components/Card.jsx';

function App() {
  const [input, setInput] = useState('')
  const [url, setUrl] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) { throw new Error('Error al obtener datos de la API') }
        const userData = await response.json()
        setUserData(userData)
        setLoading(false)
        dispatch(updateUser(userData))
      }
      catch { (console.log(error)) }
    }
    fetchUserData()
  }, [url])

  const handleUpdate = () => {
    const urlApi = `https://api.github.com/users/${input}`
    setUrl(urlApi)
  }


  return (
    <>
      <Form input={input} setInput={setInput} handleUpdate={handleUpdate} />
      {loading
        ? <h2>Loading...</h2>
        : <Card user={user} />
      }
    </>
  );
}

export default App;