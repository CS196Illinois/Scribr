import React, { Component } from 'react'
// installed package axios
import axios from 'axios';

class Dropzone extends Component {
    // initial has no file
    state = {
        selectedFile: null
    }
    // when file is selcted
    onFileSelect = event => {
        // update state
        this.setState({ selectedFile: event.target.files[0] });
    }

    // on file upload (when the upload button is clicked)
    onFileUpload = () => {
        // creares an object of formData
        const formData = new FormData();
        // update formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        // details of uploaded file
        console.log(this.state.selectedFile);

        // REQUEST MADE TO THE BACKEND API
        // sends formData object
        axios.post("api/uploadfile", formData);
    }

    // file content to be diplayed after file upload is complete
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2> 
                    <p>File Name: {this.state.selectedFile.name}</p> 
                    <p>File Type: {this.state.selectedFile.type}</p> 
                    <p> 
                    Last Modified:{" "} 
                    {this.state.selectedFile.lastModifiedDate.toDateString()} 
                    </p> 
                </div>
            );
        } else {
            
        }
    };


  render() {
    return (
      <div>
        <div>
            <input type="file" onChange={this.onFileChange} /> 
            <button onClick={this.onFileUpload}> 
                Scribr! 
            </button> 
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default Dropzone;