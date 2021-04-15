import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function PopUp(props) {

    return (
      <Popup trigger={<button>Trigger</button>} position="top left">
    {close => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
         
    );

}

export default PopUp;