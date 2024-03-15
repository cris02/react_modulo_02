import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWordApp } from './HelloWordApp';
import { FirtApp } from './FirtApp';

{/* <HelloWordApp /> */}
{/* <FirtApp /> */}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirtApp />
    </React.StrictMode>
);