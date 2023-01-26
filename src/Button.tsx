import React from 'react';

type PropsType = {
    name: string
    callback: () => void
    isDisabled: boolean

}

export const Button = (props: PropsType) => {
    const {name, callback, isDisabled} = props

    return (

        <button className='button'
                disabled={isDisabled}
                onClick={callback}>{name}</button>

    )
}