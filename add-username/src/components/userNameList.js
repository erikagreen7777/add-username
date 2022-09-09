import UserListItem from "./userListItem";

function UserNameList(items) {
  return (
    <ul>
      {items.items.map((userlist) => (
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
