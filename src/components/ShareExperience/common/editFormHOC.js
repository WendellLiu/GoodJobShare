import React from 'react';
// import PropTypes from 'prop-types';

import {
  path,
  compose,
} from 'ramda';

import {
  getOneExperiences as getOneExperiencesApi,
  patchOneExperience as patchOneExperienceApi,
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
      // TODO:
      // auth redirect
      // onSubmit
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

      const experienceId = getExperienceId(this.props);

      if (!defaultFormData) return null;

      // TODO: handle status
      return (
        <Component
          {...this.props}
          initDefaultForm={defaultFormData}
          isEdit
          onFormPost={patchOneExperienceApi(experienceId)}
        />
      );
    }
  };

export default editFormHOC;
