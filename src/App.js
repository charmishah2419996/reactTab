import React, { Component } from 'react';
import { render } from 'react-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

let idCounter = 0;
const generateIds = () => `custom-id-${idCounter++}`
 
class App extends Component {
  
  handleSelect(index, last) {
   
  }
 
  render() {
    return (
      
 
     <div>
      <Tabs
        defaultIndex={1} onSelect={index=>console.log(index)}
      >
        <TabList>
          <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>
          <TabPanel>
          <h2>Hello from Foo1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz3</h2>
        </TabPanel>
      </Tabs>
      </div>
    
    
    );
  }
}
 


export default App;
