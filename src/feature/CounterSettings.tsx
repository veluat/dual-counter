import React from 'react';
import { SettingsDisplay } from '../components/settings-display/SettingsDisplay';
import { Button } from '../components/button/Button';
import {ErrorType} from '../app/App'

type CounterSettingsProps = {
  maxValue: number;
  startValue: number;
  disabled: boolean;
  error: ErrorType;
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
  return (
    <div className="container">
      <SettingsDisplay
        maxValue={maxValue}
        startValue={startValue}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
        error={error}
      />
      <div className="display_button">
        <Button
          name={'Set'}
          isDisabled={error.startValueError || error.maxValueError || disabled}
          counterSettings={counterSettingsHandler}
        />
        {editMode && (
          <Button
            name={'Back'}
            isDisabled={false}
            onBackClick={onBackClickHandler}
          />
        )}
      </div>
    </div>
  );
};