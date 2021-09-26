import { configureStore } from '@reduxjs/toolkit'
import  userDataReducer from './userData';

export default configureStore({
  reducer: {
      user : userDataReducer
  }
});