import React, { useState } from 'react';
import { SettingsDisplay } from '../components/settings-display/SettingsDisplay';
import { Button } from '../components/button/Button';

type CounterSettingsProps = {
  maxValue: number;
  startValue: number;
  disabled: boolean;
  error: boolean;
  editMode?: boolean;
  changeStartValue: (start: number) => void;
  changeMaxValue: (max: number) => void;
  counterSet: () => void;
  onBackClickHandler?: () => void;
  counterSettingsHandler?: () => void;
};

export const CounterSettings: React.FC<CounterSettingsProps> = ({
                                                                  counterSettingsHandler,
                                                                  disabled,
                                                                  maxValue,
                                                                  startValue,
                                                                  error,
                                                                  changeStartValue,
                                                                  changeMaxValue,
                                                                  editMode,
                                                                  onBackClickHandler,
                                                                  counterSet,
                                                                }) => {

  const counterSettings = () => {
    counterSet();
  };

  return (
    <div className='container'>
      <SettingsDisplay maxValue={maxValue} startValue={startValue} changeStartValue={changeStartValue} changeMaxValue={changeMaxValue} error={error} />
      <div className='display_button'>
        <Button
          name={'Set'}
          isDisabled={error || disabled}
          counterSettings={counterSettingsHandler}
        />
        {editMode && (<Button
          name={'Back'}
          isDisabled={false}
          onBackClick={onBackClickHandler}
        />)}
      </div>
    </div>
  )
}