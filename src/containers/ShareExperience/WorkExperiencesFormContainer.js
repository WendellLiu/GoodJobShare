// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  postWorkExperience,
} from '../../apis/workExperiencesApi';
import WorkExperiencesForm from '../../components/ShareExperience/WorkExperiencesForm';


const mapStateToProps = () => ({});


const mapDispatchToProps = () => ({
  onFormPost: postWorkExperience,
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperiencesForm);
