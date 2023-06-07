'use client'

import { useState } from 'react'

const App = () => {
  const [first, setFirst] = useState('')
  const [items, setİtems] = useState([])
  const handleClick = () => {
    if (!first) {
      alert('Birşeyler eklemeyi unuttunuz...')
      return
    }
    const newİtem = {
      id: Math.floor(Math.random() * 1000),
      value: first,
    }
    setİtems([...items, newİtem])
    setFirst('')
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id)
    setİtems(newArray)
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1>Alışveriş Listesi</h1>
        <div className='container-item'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder='Malzemeleri Giriniz'
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </form>
          <button onClick={handleClick} className='btn'>
            EKLE
          </button>
        </div>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{' '}
              <button onClick={() => deleteItem(item.id)}>Sil</button>
            </li>
          )
        })}
      </div>
    </div>
  )
}
export default App
