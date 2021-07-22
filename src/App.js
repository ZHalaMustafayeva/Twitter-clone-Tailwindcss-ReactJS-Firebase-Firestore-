import React from 'react';
import Widgets from './Layout/Widgets';
import Sidebar from './Layout/Sidebar';
import Content from './Layout/Content';
import Container from './Layout/Container';
const App = () => {
  return (
    <Container>
      <Sidebar/>
      <Content/>
      <Widgets/>
    </Container>
  )
}

export default App
