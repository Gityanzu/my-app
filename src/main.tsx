import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'antd-mobile/es/global';
import App from './App'

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  if (import.meta.env.DEV) {
    root.render(<App />);
  } else {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  }
}