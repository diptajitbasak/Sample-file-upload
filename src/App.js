import { useState } from "react";
import "./App.css";
import firebase from "./base";

function App() {
  let [files, setFiles] = useState(null);

  const onChange = (e) => {
    e.preventDefault();
    setFiles((files = e.target.files));
  };

  const onUpload = () => {
    let bucketName = "images";
    let file = files[0];
    let storageRef = firebase.storage().ref(`${bucketName}/ ${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (uploadTask) => {
      // let downloadURL = uploadTask.snapshot.downloadURL
      storageRef
        // .child("images/" + file.name)
        .getDownloadURL()
        .then((res) => {
          console.log("res >>", res);
        });
    });
  };

  return (
    <div className="App">
      <input type="file" onChange={onChange} />
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}

export default App;
