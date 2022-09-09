import UserListItem from "./userListItem";

function UserNameList(props) {
  // console.log('UserNameList text: ' + props.items[0].text)
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
