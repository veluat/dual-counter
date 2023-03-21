import React, {ChangeEvent} from 'react';

type SelectButtonPropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (start: number) => void
    changeMaxValue: (max: number) => void
    error: boolean
}

export const DisplayValue = (props: SelectButtonPropsType) => {

    const selectMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }
    const selectStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+e.currentTarget.value)
    }

    return (
        <div className='display'>
            <div className='input'>max value:
                <input className={props.error ? 'input_error' : 'input'}
                       type="number"
                       min={1}
                       max={100000}
                       onChange={selectMaxValue}
                       step="1"
                       value={props.maxValue}/>
            </div>
            <div className='input'>
                <div>start value:
                    <input className={props.error ? 'input_error' : 'input'}
                           type="number"
                           min={-1}
                           max={100000}
                           onChange={selectStartValue}
                           step="1"
                           value={props.startValue}/>
                </div>
            </div>
        </div>
    )
}