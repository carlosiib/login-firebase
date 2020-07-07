import React, { useEffect, useState } from "react"
import { auth } from "../firebase"
import { withRouter } from "react-router-dom"

const Admin = (props) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    if (auth.currentUser) {
      console.log("Existe un usuario")
      setUser(auth.currentUser)

    } else {
      console.log(("No existe usuario"))
      //redireccionando usuario no registrado a login
      props.history.push("/login")
    }
  }, [props.history])
  return (
    <div>
      <h2 className="text-center">Ruta protegida</h2>
      {user && (
        <h3>{user.email}</h3>
      )}
    </div>
  )
}

export default withRouter(Admin);