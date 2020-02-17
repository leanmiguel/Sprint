import React, { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      Login
      <form>
        <input type='email' name='email' />
        <input type='password' name='password' />
        <input type='submit' value='Submit' />
      </form>
      <Link to='/signup'>Sign Up</Link>
    </>
  )
}

export default Login
