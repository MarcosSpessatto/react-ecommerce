import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageTitle extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <h1 id='page-title'>{this.props.title}</h1>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;