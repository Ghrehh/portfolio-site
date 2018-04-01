import React from 'react';
import PropTypes from 'prop-types';

import * as oneOrManyElementsModel from 'models/one-or-many-elements.js';

const Page = ({ children }) => (
  <React.Fragment>
    <main>{children}</main>
  </React.Fragment>
);

Page.propTypes = {
  projects: PropTypes.array.isRequired,
  children: oneOrManyElementsModel.PropTypes
};

export default Page;
