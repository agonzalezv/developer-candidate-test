import React from 'react'

const User = props => {
  const { _id, name, gender, age } = { ...props.user }
  return (
    <div className="card col-sm-3" key={_id}>
      <div className="card-body">
        <h5 className="card-title">
          {name} - age {age}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{gender}</h6>
      </div>
    </div>
  )
}

export default User
