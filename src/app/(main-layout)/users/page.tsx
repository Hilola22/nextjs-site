import React from 'react'
import { UsersView } from '../../../components/users/UsersView'

const Users = async() => {
  const response = await fetch("https://fakestoreapi.com/users")
  const data = await response.json()
  return (
    <div>
      <UsersView data={ data} />
    </div>
  )
}

export default Users