import React, { Fragment } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
// commented out because it's overriding global CSS, need to migrate to isolated styled components
import TopNavbar from './topnavbar';
import TestTokenUI from './testtoken';
import ERC20TokenUI from './erc20token';
import SNTUI from './snt-ui';

export default ({ setAccount }) => {
  return (
    <div class="container">
      <TopNavbar accountUpdateHandler={(e) => setAccount(e)} />
      <Tabs defaultActiveKey={0} id="uncontrolled-tab-example">
        <Tab eventKey={0} title="VotingDapp">
        </Tab>
       
        <Tab eventKey={2} title="SNT Token">
          <SNTUI />
        </Tab>
        <Tab eventKey={3} title="TestToken">
          <TestTokenUI />
        </Tab>
        <Tab eventKey={4} title="ERC20Token">
          <ERC20TokenUI />
        </Tab>
      </Tabs>
    </div>
  )
}
