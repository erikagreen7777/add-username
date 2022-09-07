import UserListItem from "./userListItem";

function UserNameList(props) {
  return (
    <ul>
      {props.items.map((userlist) => (
        <UserListItem
          key={userlist.id}
          id={userlist.id}        >
          {userlist.text}
        </UserListItem>
      ))}
    </ul>
  );
}

export default UserNameList;
