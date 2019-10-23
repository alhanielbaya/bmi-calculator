import React, { useContext } from 'react';

import styles from './Calculator.module.scss';
import { ModeContext, METRIC, IMPERIAL, UserContext } from '../../store/Store';
import MetricForm from './MetricForm/MetricFrom';
import ImperialForm from './ImperialForm/ImperialForm';
import { calculateMetric, calculateImperial } from './formulas/formulas';

const Calculator = () => {
  const [currentMode, setCurrentMode] = useContext(ModeContext);
  const [
    height,
    weight,
    isReady,
    bmi,
    setHeight,
    setWeight,
    setIsReady,
    setBmi
  ] = useContext(UserContext);

  function handleCalculation() {
    if (currentMode === METRIC) {
      setBmi(calculateMetric(height, weight));
    } else if (currentMode === IMPERIAL) {
      setBmi(calculateImperial(height, weight));
    }
  }

  React.useEffect(() => {
    if (height > 0 && weight > 0 && height < 1000 && weight < 1000) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [height, weight, setIsReady, isReady]);

  return (
    <div className={styles.container}>
      <div class={`card ${styles.card}`}>
        <div class={`card-header ${styles.cardHeader}`}>
          <div class='card-title h5'>BMI Calculator</div>
          <div class='form-group'>
            <label class='form-radio form-inline'>
              <input
                type='radio'
                name='gender'
                checked={currentMode === METRIC}
                onChange={() => {
                  setCurrentMode(METRIC);
                  setHeight(undefined);
                  setWeight(undefined);
                }}
              />
              <i class='form-icon'></i> Metric
            </label>
            <label class='form-radio form-inline'>
              <input
                type='radio'
                name='gender'
                checked={currentMode === IMPERIAL}
                onChange={() => {
                  setCurrentMode(IMPERIAL);
                  setHeight(undefined);
                  setWeight(undefined);
                }}
              />
              <i class='form-icon'></i> Imperial
            </label>
          </div>
        </div>

        <div class='card-body'>
          {currentMode === METRIC ? (
            <form class='form-horizontal'>
              <MetricForm
                name='Height'
                ms='cm'
                measurement='centimeters'
                setState={setHeight}
                value={height}
              ></MetricForm>
              <MetricForm
                name='Weight'
                ms='kg'
                measurement='kilograms'
                setState={setWeight}
                value={weight}
              ></MetricForm>
            </form>
          ) : (
            <ImperialForm></ImperialForm>
          )}
        </div>

        <div class='card-footer'>
          <div className='container'>
            <div className={`${styles.bmiContainer}`}>
              <button
                class='btn btn-primary'
                disabled={!isReady}
                onClick={() => handleCalculation()}
              >
                Calculate
              </button>

              <h4>
                BMI:{' '}
                <span>
                  <strong>{bmi}</strong>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
