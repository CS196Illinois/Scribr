import React, {Component} from 'react'
import './Dropzone.css'

class Dropzone extends Component {
    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
    }

    // to open the fileExplorer dialog
    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    // event of adding files
    onFilesAdded(event) {
        if (this.props.disabled) return;
        const files = event.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }

    // event of 
    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    // rendering and output of the area - TO DECORATE
    render() {
        return (
            <div className="Dropzone"
                onClick={this,this.openFileDialog}
                style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
                {/* unsure if img code is essential */}
                <img
                    alt="upload"
                    className="Icon"
                    src="baseline-cloud_upload-24px.svg"
                />

                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}/>
                <span>Drop File</span>
            </div>
        );
    }
}

export default Dropzone