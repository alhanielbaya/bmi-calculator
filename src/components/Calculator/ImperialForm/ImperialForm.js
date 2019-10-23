import React from 'react';
import styles from './ImperialForm.module.css';
import { UserContext } from '../../../store/Store';

const ImperialForm = () => {
  const [
    height,
    weight,
    isReady,
    bmi,
    setHeight,
    setWeight,
    setIsReady,
    setBmi
  ] = React.useContext(UserContext);

  const [feetHeight, setFeetHeight] = React.useState(undefined);

  return (
    <div>
      <form class='form-horizontal'>
        <div class='form-group'>
          <div class='col-3 '>
            <label class='form-label' for='input-example-1'>
              Height
            </label>
          </div>
          <div class='col-2'>
            <input
              class='form-input'
              type='text'
              id='input-example-1'
              placeholder='ft.'
              onChange={e => {
                var toSet = parseInt(e.target.value) * 12;
                setHeight(toSet);
                setFeetHeight(toSet);
              }}
              value={height ? Math.floor(height / 12) : ''}
            />
          </div>
          <div class='col-2'>
            <h4 className={`${styles.measurementSmall} mx-2`}>feet</h4>
          </div>
        </div>

        <div className='form-group'>
          <div className='col-3'></div>
          <div class='col-2'>
            <input
              class='form-input'
              type='text'
              id='input-example-1'
              placeholder={`in.`}
              onChange={e => {
                setHeight(feetHeight + parseInt(e.target.value));
              }}
            />
          </div>
          <div class='col-2'>
            <h4 className={`${styles.measurementSmall} mx-2`}>inches</h4>
          </div>
        </div>

        <div class='form-group'>
          <div class='col-3 '>
            <label class='form-label' for='input-example-1'>
              Weight
            </label>
          </div>
          <div class='col-2'>
            <input
              class='form-input'
              type='text'
              id='input-example-1'
              placeholder='lbs.'
              onChange={e => {
                setWeight(parseInt(e.target.value));
              }}
            />
          </div>
          <div class='col-2'>
            <h4 className={`${styles.measurementSmall} mx-2`}>pounds</h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImperialForm;
