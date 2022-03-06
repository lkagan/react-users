import AddUser from "./components/Users/AddUser";
import React, {useState} from 'react';
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (name, age) => {
        setUsersList(prevUsersList => [...prevUsersList, {id: Math.random().toString(), name, age}]);
    }

    return (
        // Alias for <React.Fragment></React.Fragment>
        // Can also use <Fragment /> if imported from React.
        <>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </>
    );
}

export default App;
