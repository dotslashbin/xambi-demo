import React from 'react';
import './App.css';
import { EditPage } from './components/pages';
import { FormTypesProvider } from "./store/FormTypeContext";

function App() {
  return (
      <FormTypesProvider>
        <div className="App">
          <h1>This is an example on how the form is...</h1>
            <EditPage />
        </div>
      </FormTypesProvider>
  );
}

export default App;
