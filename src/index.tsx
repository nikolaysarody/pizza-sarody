import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider';

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
