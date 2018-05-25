import { combineReducers } from 'redux';
import LibraryData from './LibraryData';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryData,
  selectionLibraryId: SelectionReducer
});
