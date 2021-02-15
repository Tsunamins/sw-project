import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/authActions'


const Logout = ({logout}) => {
    console.log(logout)
    return (
        <div id="Logout">
            <form onSubmit={logoutUser}>
                <input className='button' type="submit" value="Logout" />
            </form>
        </div>
    )
}

export default connect(null, { logout })(Logout)