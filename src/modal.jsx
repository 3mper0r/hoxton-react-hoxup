function Modal(props) {

    return (
        <div className="app">
            {props.modal === 'new-user' ? (
                <div className="modal-wrapper">
                    <h1>Enter your details</h1>
                    <span>First Name</span>
                    <input type="text" />
                    <span>Last Name</span>
                    <input type="text" />
                    <span>Phone Number</span>
                    <input type="" />

                    <button
                        onClick={() => { props.setModal('') }}

                    >Close da fukcin modal</button>
                </div>
            ) : null}


        </div>


    )

}

export default Modal