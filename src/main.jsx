import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// radix theme css
import '@radix-ui/themes/styles.css';
import { Theme,ThemePanel } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme className='h-full' appearance="inherit" accentColor="lime">
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>,
)
