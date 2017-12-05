import {
  reduce,
  propOr,
} from 'ramda';

import {
  idGenerator,
} from '../../utils';

const idCounter = idGenerator();

const getId = idCounter() * (-1);

const getBlocks = reduce(
  (pV, cV) => ({
    ...pV,
    [getId]: cV,
  }),
  {}
);

const defaultFormConverter = data => {
  const {
    company,
    job_title: jobTitle,
    experience_in_year: experienceInYear,
    education,
    region,
    title,
    sections,
    interview_time: interviewTime,
    interview_result: interviewResult,
    overall_rating: overallRating,
    salary,
    interview_sensitive_questions: interviewSensitiveQuestions,
    interview_qas: interviewQas,
  } = data;

  return {
    companyQuery: propOr('', 'name')(company),
    companyId: propOr('', 'id')(company),
    region: region || '',
    jobTitle: jobTitle || '',
    experienceInYear: experienceInYear || null,
    education: education || null,
    interviewTimeYear: propOr(null, 'year')(interviewTime),
    interviewTimeMonth: propOr(null, 'month')(interviewTime),
    interviewResult: interviewResult || null,
    salaryType: propOr('month', 'type')(salary),
    salaryAmount: propOr('', 'amount')(salary),
    overallRating: overallRating || 0,
    title: title || '面試經驗分享',
    sections: getBlocks(sections),
    interviewQas: getBlocks(interviewQas),
    interviewSensitiveQuestions: interviewSensitiveQuestions || [],
  };
};

export default defaultFormConverter;
