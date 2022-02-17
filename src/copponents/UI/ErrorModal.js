import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }) => {
    return <div className={classes.backdrop} onClick={onClick} />
}

const ModalOverlay = ({ title, message, onClick }) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>
                    {title}
                </h2>
            </header>
            <div className={classes.content}>
                <p>
                    {message}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={onClick}>Okay</Button>
            </footer>
        </Card>
    )
}


const ErrorModal = ({ title, message, onClick }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={onClick} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={title}
                    message={message}
                    onClick={onClick}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default ErrorModal
