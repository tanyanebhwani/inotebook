import React from 'react'

function Alert(props) {
    const style = {
        position: `absolute`,
        top: `9vh`,
        zIndex: `1000`,
        width: `100%`
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={style}>
            <strong>{props.alert.type}</strong>:{props.alert.msg}
        </div>
    )
}

export default Alert
