import React from 'react';

type PropsType = {
    name: string
    counterSettings: () => void
    isDisabled: boolean
}

export const Button = (props: PropsType) => {
    const {name, counterSettings, isDisabled} = props
    return (
        <button className='button'
                disabled={isDisabled}
                onClick={counterSettings}>{name}</button>
    )
}