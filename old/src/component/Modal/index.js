import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function NewModal(props) {
    const { show,
        handleClose,
        onSubmit,
        modalTitle,
        primaryButton,
        secondaryButton
    } = props

    return (
        <>
            <Modal size="xl" show={show} onHide={handleClose} >
                {modalTitle&&
                    <Modal.Header closeButton>
                        <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                }
                <Modal.Body>{props.body}</Modal.Body>
                <Modal.Footer>
                    {secondaryButton &&
                        <button variant="secondary" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04" onClick={handleClose}>
                            {secondaryButton}
                        </button>
                    }
                    {primaryButton &&
                        <button variant="primary" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04" onClick={onSubmit}>
                            {primaryButton}
                        </button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default NewModal