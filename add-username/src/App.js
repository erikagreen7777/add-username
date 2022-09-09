import { useState } from "react";
import "./App.css";
import UserNameInput from "./components/userNameInput";
import UserNameList from "./components/userNameList";

const App = () => {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [userNameAndAge, setUserNameAndAge] = useState("");

  const addUserNameHandler = (enteredText) => { 
    const [enteredUserName, enteredAge] = enteredText;
    var formattedUserNameAndAge = `${enteredUserName} (${enteredAge})`;
    setUserNameAndAge((prevEnteredText) => {
      console.log(formattedUserNameAndAge)
      return [{text: formattedUserNameAndAge, id: Math.random()}, prevEnteredText];
    });
    // setUserName((prevUsername) => {
    //   const updatedUserName = [...prevUsername];
    //   updatedUserName.unshift({ text: enteredUserNameText, id: Math.random() });
    // });
    // setUserAge((prevUserAge) => {
    //   const updatedUserAge = [...prevUserAge];
    //   updatedUserAge.unshift({ text: enteredAgeText, id: Math.random() });
    // });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No username found. Maybe add one?</p>
  );

  if (userNameAndAge.length > 0) {
    content = <UserNameList items={userNameAndAge} />;
  }

  return (
    <div className="App">
      <section>
        <UserNameInput onAddUsername={addUserNameHandler} />
      </section>
      <section>{content} </section>
    </div>
  );
};

export default App;
