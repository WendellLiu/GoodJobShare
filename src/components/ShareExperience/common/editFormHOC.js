import React from 'react';
// import PropTypes from 'prop-types';

import {
  path,
  compose,
} from 'ramda';

import {
  getOneExperiences as getOneExperiencesApi,
} from '../../../apis/experiencesApi';

const getExperienceId = compose(
  path([
    'params',
    'experienceId',
  ]),
);

const editFormHOC = Component =>
  class EditFormComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        defaultFormData: null,
      };
    }

    componentDidMount() {
      const experienceId = getExperienceId(this.props);

      getOneExperiencesApi(experienceId)
        .then(this.setDefaultFormData);
    }

    setDefaultFormData = defaultFormData =>
      this.setState({ defaultFormData })

    render() {
      const {
        defaultFormData,
      } = this.state;

      if (!defaultFormData) return null;
      return (
        <Component
          {...this.props}
          initDefaultForm={defaultFormData}
          isEdit
        />
      );
    }
  };

export default editFormHOC;
