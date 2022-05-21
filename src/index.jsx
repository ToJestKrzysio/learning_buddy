import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';

import App from './components/App/App.jsx';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
