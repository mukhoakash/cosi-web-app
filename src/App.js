import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [blobName, setBlobName] = useState('')
  const [file, setFile] = useState()
  const [data, setData] = useState('initial value')
  const url = "http://localhost:8080"
  function handleBlobName(event) {
    console.log("AKASH :: ", event.target.value)
    setBlobName(event.target.value)
  }

  function handleGetBlob(event) {
    if (blobName !== '') {
      // Send GET request with blob name here
      axios.get(url + "/get/" + blobName).then(response => {
        console.log("Response: " + response)
        const data = response.data.data
        setData(data)
      }).catch(function (error){
        console.log(error)
      });
    }
  }

  function handleFileChoose(event) {
    console.log("AKASH content ::", event.target.result)
    console.log("AKASH :: FILE :: ", event.target.files[0])
    const formData = new FormData()
    formData.append("file", event.target.files[0])
    setFile(formData)
  }

  function handleUploadBlob(event) {
    if (file !== null) {
      // Send POST request with file here
      axios.post(url + "/put/", file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }}
      ).then(response => {
        console.log(response.data)
      }).catch(function (error){
        console.log(error)
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
 