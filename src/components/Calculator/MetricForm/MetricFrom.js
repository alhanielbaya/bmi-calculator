import React from 'react';
import styles from './MetricForm.module.scss';

const MetricForm = props => {
  return (
    <div>
      <form class='form-horizontal'>
        <div class='form-group'>
          <div class='col-3 '>
            <label class='form-label' for='input-example-1'>
              {props.name}
            </label>
          </div>
          <div class='col-2'>
            <input
              class='form-input'
              type='text'
              id='input-example-1'
              placeholder={props.ms}
              value={props.value}
              onChange={e => props.setState(e.target.value)}
            />
          </div>
          <div class='col-2'>
            <h4 className={`${styles.measurementSmall} mx-2`}>
              {props.measurement}
            </h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MetricForm;
