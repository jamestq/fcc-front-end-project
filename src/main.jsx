import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  App, ErrorPage,
  Clock, DrumMachine, JSCalculator,
  MarkDownPreview, QuoteMachine
} from './Components';
import MarkdownPreivew from './components/MarkdownPreview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/clock",
    element: <Clock/>
  },
  {
    path: "/drum-machine",
    element: <DrumMachine/>
  },
  {
    path: "/calculator",
    element: <JSCalculator/>
  },
  {
    path: "/markdown-preview",
    element: <MarkDownPreview/>
  },
  {
    path: "/quote-machine",
    element: <QuoteMachine/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
