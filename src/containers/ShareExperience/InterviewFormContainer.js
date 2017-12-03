import { connect } from 'react-redux';

import {
  postInterviewExperience,
} from '../../apis/interviewExperiencesApi';

import InterviewForm from '../../components/ShareExperience/InterviewForm';


const mapStateToProps = () => ({});


const mapDispatchToProps = () => ({
  onFormPost: postInterviewExperience,
});


export default connect(mapStateToProps, mapDispatchToProps)(InterviewForm);
