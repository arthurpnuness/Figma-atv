import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Rotas from './components/Rotas';
import { temaPadrao } from "./temas/temaPadrao";
import { ThemeProvider } from "@mui/material"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={temaPadrao}>
      <Rotas />
    </ThemeProvider>
  </React.StrictMode>
);