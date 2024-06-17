import React, {ChangeEvent} from 'react';
import s from './SettingsDisplay.module.scss'
import clsx from 'clsx'
type SelectButtonPropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (start: number) => void
    changeMaxValue: (max: number) => void
    error: boolean
}

export const SettingsDisplay = (props: SelectButtonPropsType) => {

    const selectMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }
    const selectStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+e.currentTarget.value)
    }
const finallyStyles = clsx(s.input, props.error && s.input_error)
    return (
        <div className={s.display}>
            <label className={s.input}>
                <span>max value:</span>
                <input className={finallyStyles}
                       type="number"
                       min={1}
                       max={100000}
                       onChange={selectMaxValue}
                       step="1"
                       value={props.maxValue}/>
            </label>
            <label className={s.input}>
                    <span>start value:</span>
                    <input className={finallyStyles}
                           type="number"
                           min={-1}
                           max={100000}
                           onChange={selectStartValue}
                           step="1"
                           value={props.startValue}/>
            </label>
        </div>
    )
}