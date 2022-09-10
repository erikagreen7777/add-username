import "./userListItem.css"

function UserListItem(props) {
  return (
    <li>
      {props.children}
      {/* {console.log("UserListItem " + props.children)} */}
    </li>
  );
}

export default UserListItem;
