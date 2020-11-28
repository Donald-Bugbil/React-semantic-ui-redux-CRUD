import React from 'react';
import AppSegment from './Components /AppSegmentjsx.js'
import { Container } from 'semantic-ui-react';


class App extends React.Component {


  render(){
    return(
      <Container style={{marginTop: '10vh'}}> <AppSegment /> </Container>
    )
  }
}

export default App;
