import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';

import Heading from 'common/base/Heading';

import ReasonCategory from './ReasonCategory';

import styles from './ReportForm.module.css';

const reasonCategoryOptions = [
  {
    label: '這是廣告或垃圾訊息',
    value: '這是廣告或垃圾訊息',
  },
  {
    label: '我認為這篇文章涉及人身攻擊、誹謗',
    value: '我認為這篇文章涉及人身攻擊、誹謗',
  },
  {
    label: '我認為這篇文章內容不實',
    value: '我認為這篇文章內容不實',
  },
  {
    label: '其他',
    value: '其他',
  },
];

class ReportForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reasonCategory: reasonCategoryOptions[0].value,
      reason: '',
    };
  }

  handleReasonCategory = reasonCategory =>
    this.setState({
      reasonCategory,
    })

  handleReason = reason =>
    this.setState({
      reason,
    })

  render() {
    const {
      reasonCategory,
      reason,
    } = this.state;
    return (
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '460px',
        }}
      >
        <Heading
          Tag="h2"
          size="m"
          style={{
            marginBottom: '27px',
          }}
        >
          檢舉此文章
        </Heading>
        <ReasonCategory
          reasonCategoryOptions={reasonCategoryOptions}
          reasonCategory={reasonCategory}
          handleReasonCategory={this.handleReasonCategory}
        />
        <Textarea
          useCacheForDOMMeasurements
          value={reason}
          onChange={e => this.handleReason(e.target.value)}
          placeholder="請詳述檢舉原因"
          className={styles.textarea}
          style={{
            resize: 'none',
            width: '100%',
            color: '#333333',
            fontSize: '1rem',
            border: '1px solid #BDBDBD',
            lineHeight: '1.5',
            minHeight: '88px',
            marginTop: '17px',
            marginBottom: '10px',
            padding: '14px 18px',
          }}
        />
      </section>
    );
  }
}

ReportForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ReportForm;
