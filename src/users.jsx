import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Users() {

    const params = useParams()
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(resp => resp.json())
            .then(usersFromServer => setUsers(usersFromServer))
    })
    return (

    )
}

export default Users