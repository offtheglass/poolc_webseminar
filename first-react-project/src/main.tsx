import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// tsx는 jsx랑 연결되는데 js,ts에서 html 문법을 쓸 수 있게 해주는 거