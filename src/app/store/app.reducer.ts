import { Course } from '../courses/models/course.model';

export interface State {
  isLoading: boolean;
  courses: Course[];
}

const initialState = {
  isLoading: false,
  courses: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return {
        isLoading: true
      };
    case 'STOP_LOADING':
      return {
        isLoading: false
      };
    case 'GET_COURSES': {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
