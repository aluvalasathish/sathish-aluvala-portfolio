import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Render the app and handle any errors during initialization
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Failed to find the root element');
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Failed to initialize application: Root element not found</div>';
} else {
  const root = createRoot(rootElement);
  
  try {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error('Failed to render application:', error);
    root.render(
      <div style={{ color: 'red', padding: '20px' }}>
        <h2>Failed to initialize application</h2>
        <p>Please refresh the page or contact support.</p>
      </div>
    );
  }
}
