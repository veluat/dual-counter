export const CounterActionTypes = {
  INCREASE: 'INCREASE',
  SET_COUNT: 'SET_COUNT',
  RESET: 'RESET',
  CHANGE_START_VALUE: 'CHANGE_START_VALUE',
  CHANGE_MAX_VALUE: 'CHANGE_MAX_VALUE',
  COUNTER_SETTINGS: 'COUNTER_SETTINGS',
  CHANGE_EDIT_MODE: 'CHANGE_EDIT_MODE',
} as const

export type IncreaseAction = { type: typeof CounterActionTypes.INCREASE }
export type SetCountAction = { type: typeof CounterActionTypes.SET_COUNT; value: number }
export type ResetAction = { type: typeof CounterActionTypes.RESET }
export type ChangeStartValueAction = { type: typeof CounterActionTypes.CHANGE_START_VALUE; start: number }
export type ChangeMaxValueAction = { type: typeof CounterActionTypes.CHANGE_MAX_VALUE; max: number }
export type TriggerCounterSetAction = { type: typeof CounterActionTypes.COUNTER_SETTINGS }
export type ChangeEditModeAction = { type: typeof CounterActionTypes.CHANGE_EDIT_MODE; isEditMode: boolean }

export type CounterActions =
  | IncreaseAction
  | SetCountAction
  | ResetAction
  | ChangeStartValueAction
  | ChangeMaxValueAction
  | TriggerCounterSetAction
  | ChangeEditModeAction