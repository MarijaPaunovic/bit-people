import React from 'react';

const UserGrid = (props) => {
    const usersListJSX = props.users.map((user) => (
        <li key={user.id} className={`card col s4 m3 ${user.gender}`}>

            <div className="card-image">
                <img src={user.picture.large} />
                <span className="card-title">{user.name}</span>
            </div>

            <div className="card-content">
                <p>{user.email}</p>
                <p> Birth date: {user.dateOfBirth.getDate()}.{user.dateOfBirth.getMonth() + 1}.{user.dateOfBirth.getFullYear()}.</p>
            </div>

        </li>
    ))

    return (
        <ul className="row">
            {usersListJSX}
        </ul>
    )
}

export default UserGrid
