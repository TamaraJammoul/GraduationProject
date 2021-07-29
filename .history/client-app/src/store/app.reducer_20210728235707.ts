import { createReducer, ActionReducerMap, on } from '@ngrx/store';
import { AppActions } from './app.action';
import { AppState } from './app.state';
import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';
import { Project } from '../models/project.model';
import { User } from '../models/user.model';

export const BugsReducer = createReducer(
  [] as Bug[],
  on(AppActions.fetchBugsSuccess, (_, { bugs }) => bugs)
);

export const ErrorsReducer = createReducer(
  [] as Error[],
  on(AppActions.fetchErrorsSuccess, (_, { error }) => error)
);

export const MembersReducer = createReducer(
  [] as User[],
  on(AppActions.addTeamMemberSuccess, (state, { user }) => {
    const newState: User[] = [...state];
    newState.push(user);
    return newState;
  }),
  on(AppActions.deleteTeamMember, (state, { id }) => state.filter(e => e.id !== id)),
  on(AppActions.getTeamMembersSuccess, (_, { users }) => users)
);

export const ProjectReducer = createReducer(
  [] as Project[],
  on(AppActions.addProjectSuccess, (state, { project }) => {
    const newState: Project[] = [...state];
    newState.push(project);
    return newState;
  }),
  on(AppActions.deleteProject, (state, { projectId }) => state.filter(e => e.id !== projectId)),
  on(AppActions.getProjectSuccess, (_, { projects }) => projects),
  on(AppActions.renameProjectSuccess, (state, { projectId, projectName }) => {
    let newState = [...state];
    const id: number = newState.findIndex(e => e.id === projectId);
    newState[id].name = projectName;
    return newState;
  }),
  on(AppActions.addProjectTeamMemberSuccess, (state, { user, projectId }) => {
    const newState: Project[] = [...state];
    const project: number = newState.findIndex(e => e.id === projectId);
    newState[project].users.push(user);
    return newState;
  }),
  on(AppActions.deleteProjectTeamMember, (state, { id, projectId }) => {
    let newState: Project[] = [...state];
    const project: number = newState.findIndex(e => e.id === projectId);
    newState[project] = { ...newState[project], users: newState[project].users.filter(e => e.id !== id) }
    return newState;
  }),
);


export const reducers: ActionReducerMap<AppState> = {
  bugs: BugsReducer,
  errors: ErrorsReducer,
  members: MembersReducer,
  projects: ProjectReducer,
}
