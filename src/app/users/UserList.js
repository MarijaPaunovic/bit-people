import React from 'react';

const UserList = (props) => {
    const usersListJSX = props.users.map((user) => (
        <li key={user.id} className={`collection-item avatar ${user.gender}`}>
            <img src={user.picture.medium} alt="" className="circle" />
            <p className="title">{user.name}</p>
            <p><i className="fas fa-envelope"></i>  {user.email}</p>
            <p><i className="fas fa-birthday-cake"></i>  {user.dateOfBirth.toDateString()}</p>
        </li>
    ))

    return (
        <div className="row">
            <div className="card">
                <ul className="collection">
                    {usersListJSX}
                </ul>
            </div>
        </div>
    )
}

export default UserList
