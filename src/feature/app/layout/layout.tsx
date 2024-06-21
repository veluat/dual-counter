import React from 'react';
import {Counter} from '../../counter'
import {IntegratedCounter} from '../../integrated-counter'
import {LayoutPropsType} from '../../../common/types'
import s from './layout.module.scss'

export const Layout: React.FC<LayoutPropsType> = ({counterVariant, countState, actions}) => {
  return (
    <div className={s.root}>
      {counterVariant === 'counter' &&
        (<Counter {...actions} {...countState}/>)}
      {counterVariant === 'integrated counter' &&
        (<IntegratedCounter {...actions} {...countState}/>)}
    </div>
  )
}