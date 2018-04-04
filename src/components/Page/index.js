import React from 'react';
import * as oneOrManyNodesModel from 'models/one-or-many-nodes.js';

const Page = ({ children }) => (
  <React.Fragment>
    <main>{children}</main>
  </React.Fragment>
);

Page.propTypes = {
  children: oneOrManyNodesModel.PropTypes.isRequired
};

export default Page;
