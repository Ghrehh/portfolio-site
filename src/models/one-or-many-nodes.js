import PropTypes from 'prop-types';

const OneOrManyNodesPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export { OneOrManyNodesPropTypes as PropTypes };
