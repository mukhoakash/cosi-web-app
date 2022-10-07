
import './App.css';
import React, {useState} from 'react';

function App() {

  const [blobName, setBlobName] = useState('')
  const [file, setFile] = useState()
  function handleBlobName(event) {
    console.log("AKASH :: ", event.target.value)
    setBlobName(event.target.value)
  }

  function handleGetBlob(event) {
    if (blobName !== '') {
      // Send GET request with blob name here
    }
  }

  function handleFileChoose(event) {
    console.log("AKASH content ::", event.target.result)
    console.log("AKASH :: FILE :: ", event.target.files[0])
    setFile(event.target.files[0])
  }

  function handleUploadBlob(event) {
    if (file !== null) {
      // Send POST request with file here
    }
  }
  function getBlobClient() {}
  return (
    <div className="App">
      <header className="App-header">
        
        <label>
        Enter blob name:
        <input type="text" onChange={handleBlobName} />
        <input type="button" value="Get" onClick={handleGetBlob} /></label>
        <br/><br/>
        <label>Upload blob:
        <input type="file" onChange={handleFileChoose} />
        <input type="button" value="Upload" onClick={handleUploadBlob} />
        </label>
      </header>
    </div>
  );
}

export default App;
 