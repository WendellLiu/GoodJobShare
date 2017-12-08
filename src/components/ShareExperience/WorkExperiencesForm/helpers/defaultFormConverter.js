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

const compareDataTime = (
  dataTimeYear,
  dataTimeMonth,
  createdYear,
  createdMonth,
) =>
  (
    dataTimeYear === createdYear
    && dataTimeMonth === createdMonth
  );

const handleDateTime = (dataTime, createdAt) => {
  const createdAtDate = new Date(createdAt);
  const createdYear = createdAtDate.getFullYear();
  const createdMonth = createdAtDate.getMonth() + 1;

  const {
    year: dataTimeYear,
    month: dataTimeMonth,
  } = dataTime;

  const isSameTime = compareDataTime(
    dataTimeYear,
    dataTimeMonth,
    createdYear,
    createdMonth,
  );

  if (isSameTime) {
    return {
      isCurrentlyEmployed: 'yes',
    };
  }

  return {
    isCurrentlyEmployed: 'no',
    jobEndingTimeYear: dataTimeYear,
    jobEndingTimeMonth: dataTimeMonth,
  };
};

const defaultFormConverter = data => {
  const {
    company,
    job_title: jobTitle,
    experience_in_year: experienceInYear,
    education,
    region,
    title,
    sections,
    salary,
    week_work_time: weekWorkTime,
    recommend_to_others: recommendToOthers,
    data_time: dataTime,
    created_at: createdAt,
  } = data;

  const dataTimeStuff = handleDateTime(dataTime, createdAt);

  return {
    companyQuery: propOr('', 'name')(company),
    companyId: propOr('', 'id')(company),
    region: region || '',
    jobTitle: jobTitle || '',
    experienceInYear: experienceInYear || null,
    education: education || null,
    salaryType: propOr('month', 'type')(salary),
    salaryAmount: propOr('', 'amount')(salary),
    title: title || '面試經驗分享',
    sections: getBlocks(sections),
    recommendToOthers: recommendToOthers || null,
    weekWorkTime: weekWorkTime || '',
    ...dataTimeStuff,
  };
};

export default defaultFormConverter;
