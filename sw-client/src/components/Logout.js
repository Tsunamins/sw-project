import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/authActions'


const Logout = ({logout}) => {
    return (
        <div id="Logout">
            <form onSubmit={logout}>
                <input className='button' type="submit" value="Logout" />
            </form>
        </div>
    )
}

export default connect(null, { logout })(Logout)