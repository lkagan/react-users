import AddUser from "./components/Users/AddUser";
import React, {useState} from 'react';
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (name, age) => {
        setUsersList(prevUsersList => [...prevUsersList, {name, age}]);
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
