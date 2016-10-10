import React from 'react';

const styles = {
  container: {
    height: '80px',
    width: '100%',
    display: 'flex',
    backgroundColor: 'blue'
  }
}
const Navbar = function() {
  return (
    <div style={styles.container}>
      <h1>Twitter App</h1>
    </div>)
}

export default Navbar;