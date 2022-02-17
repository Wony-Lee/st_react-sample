import React, { useCallback, useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ handleAddUser }) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (none-empty values).'
            })
            return;
        }
        if (+setEnteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        handleAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const handleUsernameChange = (e) => {
        setEnteredUsername(e.target.value)
    }
    const handleAgeChange = (e) => {
        setEnteredAge(e.target.value)
    }

    const handleError = useCallback((e) => {
        setError(null)
    }, [])

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClick={handleError} />}
            <Card
                className={classes.input}
            >
                <form
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        id="username"
                        value={enteredUsername}
                        onChange={handleUsernameChange}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        value={enteredAge}
                        onChange={handleAgeChange}
                    />
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
