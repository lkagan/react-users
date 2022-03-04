import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import {useState} from "react";

const AddUser = props => {
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUser, enteredAge);
    };

    const usernameChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor={"username"}>Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;