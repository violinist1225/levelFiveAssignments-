import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BountyProvider} from './Context'


ReactDOM.render(
 <BountyProvider>
     <App />
 </BountyProvider>
  
, document.getElementById('root')
);

