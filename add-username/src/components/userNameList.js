import UserListItem from "./userListItem";

function UserNameList(props) {
  return (
    <ul>
      {props.items.map((userlist) => (
        <UserListItem 
          key={Math.random()} 
          id={userlist.id}>
          {userlist.text}
        </UserListItem>
      ))}
    </ul>
  );
}

export default UserNameList;
