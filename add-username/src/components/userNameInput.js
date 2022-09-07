import { useState } from "react";

function UserNameInput(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // cooncat username & age
    props.onAddUsername(enteredUsername);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div>
          <label>Add Username</label>
          <input type="text" onChange={userNameInputChangeHandler} />
        </div>
        <div>
          <label>Add Password</label>
          <input type="text" onChange={ageInputChangeHandler} />
        </div>
        <button type="submit">Add Username</button>
      </div>
    </form>
  );
}

export default UserNameInput;
