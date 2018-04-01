import React from 'react';

import * as oneOrManyElementsModel from 'models/one-or-many-elements.js';

const Page = ({ children }) => (
  <React.Fragment>
    <main>{children}</main>
  </React.Fragment>
);

Page.propTypes = {
  children: oneOrManyElementsModel.PropTypes.isRequired
};

export default Page;
