import { createRoot } from 'react-dom/client' //ferramenta do react, que cria o que vai ser mostrado na tela.
import './index.css' // Arquivos de css globais que pode ser aplicados para todos os componentes, forma de reutilzar estilos. 
import App from './App.tsx' // App - Componente

createRoot(document.getElementById('root')!).render( 
  //tudo que colcar aqui dentro ele vai renderizar na tela. 
    <App />
)
