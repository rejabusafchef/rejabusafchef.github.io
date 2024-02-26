import { useEffect, useState, useContext } from "react";
import { UserContext } from './App';
import DisplayUserData from "./DisplayUserData";

function FetchUsers() {
    const [records, setRecords] = useState([]);
    let { selectedUser } = useContext(UserContext);
    let { setSelectedUser } = useContext(UserContext);
    const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])
    if (selectedUser) {
        return (
            <DisplayUserData />
        )
    }
    else {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((user) => (
                            <tr key={user.id} onClick={() => {
                                setSelectedUser(user);
                            }}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>

        )
    }
}

export default FetchUsers;
