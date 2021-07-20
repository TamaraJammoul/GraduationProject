import { createAction } from '@ngrx/store';
import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';
import { Login } from '../models/login.model';
import { Signup } from '../models/signup.model';
import { Project } from '../models/project.model';

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

const deleteError = createAction(
    '[app] delete Error',
    (errorId: string) => ({ errorId })
);

const deleteErrorSuccess = createAction(
    '[app] delete Error Success'
);

const resolveBug = createAction(
    '[app] resolve Bug',
    (bugId: string) => ({ bugId })
);

const resolveBugSuccess = createAction(
    '[app] resolve Bug Success'
);

const deleteProject = createAction(
    '[app] delete Project',
    (projectId: string) => ({ projectId })
);

const deleteProjectSuccess = createAction(
    '[app] delete Project Success'
);

const addProject = createAction(
    '[app] add Project',
    (name: string) => ({ name })
);

const addProjectSuccess = createAction(
    '[app] add Project Success',
    (project: Project) => ({ project })
);

const addTeamMember = createAction(
    '[app] add TeamMember',
    (email: string) => ({ email })
);

const addTeamMemberSuccess = createAction(
    '[app] add TeamMember Success'
);

const deleteTeamMember = createAction(
    '[app] delete TeamMember',
    (email: string) => ({ email })
);

const deleteTeamMemberSuccess = createAction(
    '[app] delete TeamMember Success'
);

const addProjectTeamMember = createAction(
    '[app] add Project TeamMember',
    (email: string) => ({ email })
);

const addProjectTeamMemberSuccess = createAction(
    '[app] add Project TeamMember Success'
);

const deleteProjectTeamMember = createAction(
    '[app] delete Project TeamMember',
    (email: string) => ({ email })
);

const deleteProjectTeamMemberSuccess = createAction(
    '[app] delete Project TeamMember Success'
);

const getProject = createAction(
    '[app] get Project',
);

const getProjectSuccess = createAction(
    '[app] get Project Success',
    (projects: Project[]) => ({ projects })
);

export const AppActions = {
    fetchErrors,
    fetchErrorsSuccess,
    fetchBugs,
    fetchBugsSuccess,
    login,
    loginSuccess,
    signUp,
    signUpSuccess,
    deleteError,
    deleteErrorSuccess,
    resolveBug,
    resolveBugSuccess,
    deleteProject,
    deleteProjectSuccess,
    deleteProjectTeamMember,
    deleteProjectTeamMemberSuccess,
    addProjectTeamMember,
    addProjectTeamMemberSuccess,
    deleteTeamMember,
    deleteTeamMemberSuccess,
    addTeamMember,
    addTeamMemberSuccess,
    addProject,
    addProjectSuccess,
    getProject,
    getProjectSuccess
}