import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age.'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age.'
            });
            return;
        }

        props.onAddUser(enteredUser, enteredAge);

        setEnteredUser('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor={"username"}>Username</label>
                    <input id="username" type="text"
                           onChange={usernameChangeHandler}
                           value={enteredUser}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler}
                           value={enteredAge}/>
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;