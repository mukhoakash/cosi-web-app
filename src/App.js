
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [blobName, setBlobName] = useState('')
  const [file, setFile] = useState()
  const [data, setData] = useState('initial value')
  const url = "objectstorageprovisioner:8080"
  function handleBlobName(event) {
    console.log("AKASH :: ", event.target.value)
    setBlobName(event.target.value)
  }

  function handleGetBlob(event) {
    if (blobName !== '') {
      // Send GET request with blob name here
      axios.get(url + "/" + blobName).then(response => {
        console.log("Response: " + response)
        setData(response.data)
      });
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
      axios.post(url + "/" + blobName, event.target.files[0]).then(response => {
        console.log(response)
      });
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
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
 