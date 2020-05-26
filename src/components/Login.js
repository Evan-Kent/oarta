import React, { useState, useEffect } from "react"
import logo from "../images/thering.png"
import { useFormInput } from '../utilities/hooks'

function Login({ setAuth }) {

  let [username, setUsername] = useFormInput('')
  let [password, setPassword] = useFormInput('')
  let [isPass, setIsPass] = useState(false)

  useEffect(() => {

  }, [isPass])

  function handleSubmit(e) {
    e.preventDefault()
    if (!isPass) {
      setIsPass(true)
      e.target.value = ''
    }
    else {
      console.log(username, password)
      setAuth(true)
    }
  }

  let inputType = isPass ? (
    <input
      key='user'
      type="password"
      placeholder="Enter Password"
      onChange={setPassword}
    />
  ) : (
    <input
      key='pass'
      type="text"
      placeholder="Enter Username"
      onChange={setUsername}
    />
  )

  return (
    <section className="login-card">
      <div className="card-container">
        <img className="logo" alt="OARTA Logo" src={logo} />
        <h2>{ 
          isPass ?
          `Hi, ${username}!` :
          `OARTA SIGN IN`
        }</h2>
        <form action="#">
          { inputType }
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            {isPass ? 'Submit' : 'Next'}
          </button>
        </form>
      </div>
      <a className="forgot-link" href="#">
        Forgot Username?
      </a>
    </section>
  )
}

export default Login
