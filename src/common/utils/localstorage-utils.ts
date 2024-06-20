import {AppRootStateType} from "../../redux";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    throw err;
  }
};

export const saveState = (state: AppRootStateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('app-state', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
    throw err;
  }
};