import logo from './logo.svg';
import './App.css';
import { Page } from './Components/Page';
import Sidebar from './Components/Sidebar';
import { Stack } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Stack direction="row">
       <Sidebar/>
       <Page/>
      </Stack>
    </div>
  );
}

export default App;
