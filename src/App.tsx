import React from 'react';
import { Button } from 'antd';
import { Dropbox } from 'dropbox';

const dbx = new Dropbox({ clientId: 'kl4fz9vabg5el9q', fetch: fetch });

const authUrl = dbx.getAuthenticationUrl('http://localhost:3000');
const App: React.FC = () => {
  console.log(process.env);
  
  return (
    <div className="App">
    <a href={authUrl}>
      <Button type="primary">Button</Button>
    </a>
    </div>
  );
}

export default App;
