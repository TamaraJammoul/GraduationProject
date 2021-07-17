import { createAction } from '@ngrx/store';
import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';
import { Login } from '../models/login.model';
import { Signup } from '../models/signup.model';

const fetchErrors = createAction(
    '[app] Fetch Errors',
);

const fetchErrorsSuccess = createAction(
    '[app] Fetch Errors Success',
    (error: Error[]) => ({ error })
);

const fetchBugs = createAction(
    '[app] Fetch Bugs',
);

const fetchBugsSuccess = createAction(
    '[app] Fetch Bugs Success',
    (bugs: Bug[]) => ({ bugs })
);

const login = createAction(
    '[app] Login',
    (data: Login) => ({ data })
);

const loginSuccess = createAction(
    '[app] Login Success'
);

const signUp = createAction(
    '[app] SignUp',
    (data: Signup) => ({ data })
);

const signUpSuccess = createAction(
    '[app] SignUp Success'
);

export const AppActions = {
    fetchErrors,
    fetchErrorsSuccess,
    fetchBugs,
    fetchBugsSuccess,
    login,
    loginSuccess,
    signUp,
    signUpSuccess
}