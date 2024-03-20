import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWordApp } from './HelloWordApp';
import { FirtApp } from './FirtApp';

// importar estilos css
import './styles.css';

{/* <HelloWordApp /> */}
{/* <FirtApp /> */}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirtApp title={"Carlos Aguilar"} edad={29} />
    </React.StrictMode>
);