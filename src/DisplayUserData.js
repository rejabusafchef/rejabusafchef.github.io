import { useContext } from "react";
import { UserContext } from './App';

function DisplayUserData() {
    let { selectedUser } = useContext(UserContext);
    let { setSelectedUser } = useContext(UserContext);
    return (
        <>
        <br />
        <h4>Selected user:</h4>
        <ul className="list-group">
          <li className="list-group-item">ID: {selectedUser.id}</li>
          <li className="list-group-item">Name : {selectedUser.name}</li>
          <li className="list-group-item">Email : {selectedUser.email}</li>
          <li className="list-group-item">Phone : {selectedUser.phone}</li>
          <button className="btn btn-dark w-25" onClick={() => {
            setSelectedUser();
          }}>Back to users</button>
        </ul>
      </>
    )
}

export default DisplayUserData;