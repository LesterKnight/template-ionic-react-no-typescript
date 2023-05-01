import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('MAIN is loaded')
const container = document.getElementById('root');
const root = createRoot(container);
//root.render(<div>aaa</div>)
root.render(<App/>)