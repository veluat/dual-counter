import React from 'react';
import {CountDisplay} from "../components/count-display/CountDisplay";
import {Button} from "../components/button/Button";
import {ErrorType} from '../app/App'

type CounterProps = {
  count: number;
  maxValue: number;
  startValue: number;
  disabled: boolean;
  error: ErrorType;
  onIncrement: () => void;
  onReset: () => void;
  isSet?: boolean
  counterSet: () => void;

};
export const Counter: React.FC<CounterProps> = ({
                                                  isSet,
                                                  disabled,
                                                  counterSet,
                                                  count,
                                                  maxValue,
                                                  startValue,
                                                  error,
                                                  onIncrement,
                                                  onReset,
                                                }) => {


  return (
    <div className='container'>
      <CountDisplay
        counter={count}
        max={maxValue}
        disabled={disabled}
        error={error}
      />
      <div className='display_button'>
        <Button
          name={'Inc'}
          isDisabled={count === maxValue || !disabled}
          counterSettings={onIncrement}
        />
        <Button
          name={'Reset'}
          isDisabled={count === startValue || !disabled}
          counterSettings={onReset}
        />
        {isSet && (<Button
          name={'Set'}
          isDisabled={false}
          counterSettings={counterSet}
        />)}
      </div>
    </div>
  )
}