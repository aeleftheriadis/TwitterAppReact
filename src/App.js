import React from 'react';
import Navbar from './Navbar';

const styles = {
  container: {
    backgroundColor: 'red',
    width: '100%',
  }
}

const App = ({children}) => {
 console.log('hello from app')
  return (
    <div style={styles.container}>
      <Navbar />
      Hello World!
      {children}
    </div>
  )
}

export default App;
