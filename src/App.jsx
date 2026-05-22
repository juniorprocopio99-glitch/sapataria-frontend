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
    <div style={{
      padding: '40px',
      fontFamily: 'Arial'
    }}>
      <h1>Sapataria App</h1>

      <p>Status da API:</p>

      <h2>{mensagem}</h2>
    </div>
  )
}

export default App