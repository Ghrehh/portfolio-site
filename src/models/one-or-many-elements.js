import PropTypes from 'prop-types';

const OneOrManyElementsPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element
]);

export { OneOrManyElementsPropTypes as PropTypes };
