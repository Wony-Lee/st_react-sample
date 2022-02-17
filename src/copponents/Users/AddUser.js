import React, { useCallback, useRef, useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ handleAddUser }) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (none-empty values).'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        handleAddUser(enteredName, enteredUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''

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

                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"

                        ref={ageInputRef}
                    />
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
