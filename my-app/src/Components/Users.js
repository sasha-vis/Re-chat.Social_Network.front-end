function Users(props) {
  
  return (
    <div className="users-block">
      <ul className="users-list">{
        props.data.map((item, index) =>
          <li className="user" key={index}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.surname}</div>
            <div>{item.gender}</div>
            <div>{item.birthdayDate}</div>
            <div>{item.registrationDate}</div>
          </li>
        )}
      </ul>
    </div>
  );
  
}

export default Users;