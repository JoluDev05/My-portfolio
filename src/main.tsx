/** 
 * Inicio
 * 
 * Node modules imports
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Styles
 */
import '@/index.css'

/**
 * App components
 */
import { App } from '@/App';
import { Sidebar } from '@/components/Sidebar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen lg:flex justify-center lg:items-start lg:gap-10">
      <Sidebar/>
      <App />
    </div>
    
  </StrictMode>,
)
