import * as types from '../constants/actionTypes';
import * as request from './actionRequests';


// FORM
export const inputFirstNameChange = (firstName) => ({
    type: types.INPUT_FIRST_NAME_CHANGE,
    firstName
});

export const inputLoginChange = (login) => ({
    type: types.INPUT_LOGIN_CHANGE,
    login
});

export const inputPasswordChange = (password) => ({
    type: types.INPUT_PASSWORD_CHANGE,
    password
});

// SIGN UP
export const signUpSuccess = (message, addNewUser) => ({
    type: types.SIGNUP_SUCCESS,
    message,
    addNewUser
});

export const signUpFail = (message, addNewUser) => ({
    type: types.SIGNUP_SUCCESS,
    message,
    addNewUser
});

// LOGIN
export const loginSuccess = (message, loginUser) => ({
    type: types.LOGIN_SUCCESS,
    message,
    loginUser
});

export const loginFail = (message, loginUser) => ({
    type: types.LOGIN_FAIL,
    message,
    loginUser
});

// FETCH NOTES
export const fetchUsersNotesSuccess = (anyNotes, notes) => {
    type: types.FETCH_USERS_NOTES_SUCCESS,
    anyNotes,
    notes
};

export const fetchUsersNotesFail = (anyNotes) => {
    type: types.FETCH_USERS_NOTES_FAIL
};

// REQESTS
export const attemptLogin = (login, password) => (dispatch) => {
    request.attemptLoginRequest(login, password, dispatch);
};

export const attemptSingup = (firstName, login, password) => (dispatch) => {
    request.attemptSingupRequest(firstName, login, password, dispatch);
};

export const fetchUsersNotes = () => (dispatch) => {
    request.fetchUserNotesRequest(dispatch);
};
