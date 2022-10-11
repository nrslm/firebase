import React, { useState } from 'react'

function Form({ title, handleClick }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  console.log(handleClick)
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder='email'
      />
      <input
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        placeholder="password"
      />
      <button
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </button>
    </div>
  )
}

export default Form