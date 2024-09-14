import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dialog from './Dialog';

function App() {
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <div>
      <h2>Dialog Component use cases</h2>
      <button onClick={() => setisModalOpen(true)}>Open Modal</button>
      <button onClick={() => setisDialogOpen(true)}>Open Dialog</button>

      <Dialog isOpen={isModalOpen} onClose={() => setisModalOpen(false)} isModal={true} >
        <h2>Modal</h2>
        <p>you can't interact with the rest of page</p>
        <button onClick={() => setisModalOpen(false)}>Close</button>
      </Dialog>

      <Dialog isOpen={isDialogOpen} onClose={() => setisDialogOpen(false)} isModal={false} >
        <h2>Dialog</h2>
        <p>you can interact with the rest of page</p>
        <button onClick={() => setisDialogOpen(false)}>Close</button>
      </Dialog>
    </div>
  );
}

export default App;
