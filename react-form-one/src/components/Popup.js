import React from 'react';
import QrCode from 'react.qrcode.generator';
import './style.css';

class Popup extends React.Component {
    value = "IDTYPE:Voting Registration,Name:Michigan State Government,EMAIL:boilerpete@purdue.edu,SSN:1234,PHONE:(111)222-3333"
    privateKey = ""
    publicKey = ""
    
  render() {
    //var React2 = require('react');
    //var QrCode = require('qrcode.react');
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>

            <QrCode mx="center" value ={this.value} size = "280"/>
            <br/>
             <p1 mx="center" margin='normal'>You are now registered to vote. You can scan this QR code </p1>
             <p2 mx="center" margin='normal'>to add your voter ID to your wallet in the Bitlock app.</p2> 
        </div>
      </div>
    );
  }
}


export default Popup;