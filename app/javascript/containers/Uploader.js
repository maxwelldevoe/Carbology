import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accepted: [],
      rejected: []
    }
    this.passFile = this.passFile.bind(this)
  }

  passFile(accepted) {
    this.props.acceptFile(accepted)
  }

  render() {
    return(
      <div className="dropzone">
        <Dropzone
          accept="image/*"
          multiple={ false }
          onDrop={ (accepted, rejected) => { this.passFile(accepted); this.setState({ accepted, rejected })}}>
        </Dropzone>
      </div>
    )
  }
}

export default Uploader
