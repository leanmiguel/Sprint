import React from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <>
      Sign Up
      <form>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <input type='password' name='password' />
        <input type='password' name='reenter-password' />
        <input type='submit' value='Submit' />
      </form>
      <Link to='/login'>Login </Link>
    </>
  )
}

export default SignUp
