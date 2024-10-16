import { StrictMode } from 'react' // Pacote responsável pelo core do React, onde há as funcionalidades que são compartilhadas entre todas as interfaces
import { createRoot } from 'react-dom/client' // Integração do core do React com a DOM (Document Object Model => representação do HTML através do JS)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
