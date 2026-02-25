import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';

try {
    const html = renderToString(<App />);
    console.log('Rendered HTML length:', html.length);
    console.log(html.slice(0, 500));
} catch (err) {
    console.error('Error rendering App:', err);
}
