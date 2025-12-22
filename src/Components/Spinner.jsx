import React, { Component } from 'react'
import Loader from '../Loader.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex flex-row justify-content-center align-items-center' style={{height: "8rem"}}>
        <img className="d-block mx-auto" style={{height: "80px", width: "80px"}} src={Loader} alt="Loading" />
      </div>
    )
  }
}

export default Spinner;