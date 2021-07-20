import { createReducer, ActionReducerMap, on } from '@ngrx/store';
import { AppActions } from './app.action';
import { AppState } from './app.state';
import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';
import { Project } from '../models/project.model';

export const BugsReducer = createReducer(
  [] as Bug[],
  on(AppActions.fetchBugsSuccess, (_, { bugs }) => bugs)
);

export const ErrorsReducer = createReducer(
  [] as Error[],
  on(AppActions.fetchErrorsSuccess, (_, { error }) => error)
);

export const MembersReducer = createReducer(
  [] as string[],
  on(AppActions.addTeamMember, (state, { email }) => {
    const newState: string[] = [...state];
    newState.push(email);
    return newState;
  }),
  on(AppActions.deleteTeamMember, (state, { email }) => state.filter(e => e !== email))
);

export const ProjectReducer = createReducer(
  [] as Project[],
  on(AppActions.addProjectSuccess, (state, { project }) => {
    const newState: Project[] = [...state];
    newState.push(project);
    return newState;
  }),
  on(AppActions.deleteProject, (state, { projectId }) => state.filter(e => e.id !== projectId)),
  on(AppActions.getProjectSuccess, (_, { projects }) => projects)
);

export const reducers: ActionReducerMap<AppState> = {
  bugs: BugsReducer,
  errors: ErrorsReducer,
  members: MembersReducer,
  projects: ProjectReducer
}
