import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWordApp } from './HelloWordApp';
import { FirtApp } from './FirtApp';

// importar estilos css
import './styles.css';
import { CounterApp } from './CounterApp';

{/* <HelloWordApp /> */}
{/* <FirtApp /> */}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirtApp title="Eduardo" edad={33} /> */}
        <CounterApp />
    </React.StrictMode>
);