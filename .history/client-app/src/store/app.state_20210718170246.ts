import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';
import { Project } from '../models/project.model';

export interface AppState {
    bugs: Bug[],
    errors: Error[],
    members: string[],
    projects: Project[]
}

export const STATE = 'state';
