// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Creamos spotlight si no existe
if (!document.getElementById('spotlight-bg')) {
  const spotlight = document.createElement('div');
  spotlight.id = 'spotlight-bg';
  document.body.appendChild(spotlight);
}

const spotlight = document.getElementById('spotlight-bg');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const w = window.innerWidth;
  const h = window.innerHeight;

  const xp = (x / w) * 100;
  const yp = (y / h) * 100;

spotlight.style.background = `
  radial-gradient(
    circle 70vw at ${xp}% ${yp}%,
    rgba(18, 93, 255, 0.1),
    transparent 50%
  )
`;

});

window.addEventListener('mouseleave', () => {
  spotlight.style.background = "transparent";
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
