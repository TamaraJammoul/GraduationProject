import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';

export interface AppState {
    bugs: Bug[],
    errors: Error[],
    members: string[]
}

export const STATE = 'state';
