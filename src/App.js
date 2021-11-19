import './App.css';

import Header from './component/header/header';
import Content from './component/content/content';
import Footer from './component/content/footer';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 40px;
`;

function App() {
  return (
    <Container>
      <Header/>
      <Content/>
      <Footer/>
    </Container>
  );
}

export default App;
