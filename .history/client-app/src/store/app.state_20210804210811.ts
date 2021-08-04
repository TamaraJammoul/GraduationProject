import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';
import { Project } from '../models/project.model';
import { User } from '../models/user.model';

export interface AppState {
    bugs: Bug[],
    errors: Error[],
    members: User[],
    projects: Project[],
    projectUsers: User[],
    teamUsers: User[],
}

export const STATE = 'state';
