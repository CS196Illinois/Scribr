import React, { Component } from 'react'
// installed package axios for send request to backend
import { post } from 'axios';
// a react library used in the project
import { ProgressBar, Button } from 'react-mdl';
import './Dropzone.css'

class Dropzone extends Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.state = {
            loading: false
        }
      }
      //upload the file to the backend by calling the fileUpload function and show the text back on the webpage
      onFormSubmit(e){
        e.preventDefault() //prevent the webpage from refreshing
        this.setState(() => { //set loading state to true, making progress bar to show up
          return {
            loading: true
          }
        })
        this.fileUpload(this.state.file)
        .then((response) => {    //asychronous promise chaining, get the Json back, and set loading back to false to disable the progress bar
          this.setState(() => {
            return {
              loading: false
            }
          })
          document.querySelector('#someMessage').textContent = response.data //set the returned text to the <p>
        }).catch((error) => {
            document.querySelector('#someMessage').textContent = error.message
        })
      }

      //choose file and attach to the webpage
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }

      //upload the file to the backend server
      fileUpload(file){
        const url = 'http://127.0.0.1:5000/';
        const formData = new FormData();
        formData.append('file',file)
        return post(url, formData)
      }
    
      render() {
        return (
        <div>
          <form onSubmit={this.onFormSubmit} style={{marginBottom:'5%'}}>
            <h2 className="header">File Upload</h2>
            <input type="file" onChange={this.onChange} />
            <Button raised colored type="submit" style={{minWidth: '20%', height: '40%'}} disabled={this.state.loading}>Scribe!</Button>
          </form>
          <div>{this.state.loading && <ProgressBar className = 'bar' indeterminate position="left"/>}</div>  
          <p id = 'someMessage' style={{marginTop: '5%'}}></p>
        </div>  
       )
      }
    }

export default Dropzone;