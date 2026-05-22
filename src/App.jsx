import { useEffect, useState } from 'react'
import api from './services/api'

function App() {
  const [mensagem, setMensagem] = useState('Carregando...')

  useEffect(() => {
    api.get('/')
      .then((res) => {
        setMensagem(res.data)
      })
      .catch(() => {
        setMensagem('Erro ao conectar API')
      })
  }, [])

  return (
    <div>
      <h1>Sapataria App</h1>
      <h2>{mensagem}</h2>
    </div>
  )
}

export default App