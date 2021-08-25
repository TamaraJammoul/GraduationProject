import { createReducer, ActionReducerMap, on } from '@ngrx/store';
import { AppActions } from './app.action';
import { AppState } from './app.state';
import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';
import { Project } from '../models/project.model';
import { User } from '../models/user.model';

export const BugsReducer = createReducer(
  [] as Bug[],
  on(AppActions.fetchBugsSuccess, (_, { bugs }) => bugs),
  on(AppActions.resolveBugSuccess, (state, { bugId }) => state.filter(e => e.id !== bugId))
);

export const ErrorsReducer = createReducer(
  [] as Error[],
  on(AppActions.fetchErrorsSuccess, (_, { error }) => error),
  on(AppActions.deleteErrorSuccess, (state, { errorId }) => state.filter(e => e.id !== errorId)),
  on(AppActions.convertErrorToBugSuccess, (state, { errorId }) => state.filter(e => e.id !== errorId))
);


export const MembersReducer = createReducer(
  [] as User[],
  on(AppActions.getTeamMembersSuccess, (_, { users }) => users),
  on(AppActions.addTeamMemberSuccess, (state, { user }) => {
    const newState: User[] = [...state];
    return [...newState, user];
  }),
  on(AppActions.deleteTeamMemberSuccess, (state, { id }) => {
    const newState: User[] = [...state];
    return newState.filter(e => e.id !== id);
  }),
);

export const ProjectReducer = createReducer(
  [] as Project[],
  on(AppActions.addProjectSuccess, (state, { project }) => {
    const newState: Project[] = [...state];
    return [...newState, project];
  }),
  on(AppActions.deleteProject, (state, { projectId }) => state.filter(e => e.id !== projectId)),
  on(AppActions.getProjectSuccess, (_, { projects }) => projects),
  on(AppActions.renameProjectSuccess, (state, { projectId, projectName }) => {
    let newState = [...state];
    const id: number = newState.findIndex(e => e.id === projectId);
    newState[id] = { ...newState[id], name: projectName };
    return newState;
  }),
  on(AppActions.addProjectTeamMemberSuccess, (state, { user, projectId }) => {
    const newState: Project[] = [...state];
    const projectIndex: number = newState.findIndex(e => e.id === projectId);
    if (projectIndex !== -1) {
      newState[projectIndex] = { ...newState[projectIndex], users: [...newState[projectIndex].users, user] };
    }
    return newState;
  }),
  on(AppActions.deleteProjectTeamMember, (state, { id, projectId }) => {
    const newState: Project[] = [...state];
    const projectIndex: number = newState.findIndex(e => e.id === projectId);
    if (projectIndex !== -1) {
      newState[projectIndex] = { ...newState[projectIndex], users: newState[projectIndex].users.filter(e => e.id !== id) }
    }
    return newState;
  }),
);

export const ProjectUsersReducer = createReducer(
  [] as User[],
  on(AppActions.fetchProjectUsersSuccess, (_, { users }) => users)
);



export const reducers: ActionReducerMap<AppState> = {
  bugs: BugsReducer,
  errors: ErrorsReducer,
  members: MembersReducer,
  projects: ProjectReducer,
  projectUsers: ProjectUsersReducer,
}
