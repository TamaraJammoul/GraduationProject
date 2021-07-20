import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    ofType
} from '@ngrx/effects';
import {
    map,
    switchMap,
} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AppActions } from './app.action';
import { BugsService } from '../services/bugs.service';
import { ErrorsService } from '../services/errors.service';
import { ProjectService } from '../services/project.service';


@Injectable()
export class AppEffects {

    fetchBugs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchBugs),
            switchMap(() =>
                this.bugsService.fetchBugs().pipe(
                    map((results) => AppActions.fetchBugsSuccess(results)),
                )
            )
        )
    );

    fetchErrors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchErrors),
            switchMap(() =>
                this.errorsService.fetchErrors().pipe(
                    map((results) => AppActions.fetchErrorsSuccess(results)),
                )
            )
        )
    );

    deleteErrors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteError),
            switchMap(action =>
                this.errorsService.deleteError(action.errorId).pipe(
                    map(() => AppActions.deleteErrorSuccess()),
                )
            )
        )
    );

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.login),
            switchMap(action =>
                this.authService.login(action.data).pipe(
                    map(() => AppActions.loginSuccess()),
                )
            )
        )
    );

    signup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.signUp),
            switchMap(action =>
                this.authService.signUp(action.data).pipe(
                    map(() => AppActions.signUpSuccess()),
                )
            )
        )
    );

    addProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.addProject),
            switchMap(action =>
                this.projectService.addProject(action.name).pipe(
                    map((res) => AppActions.addProjectSuccess(res)),
                )
            )
        )
    );

    deleteProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteProject),
            switchMap(action =>
                this.projectService.deleteProject(action.projectId).pipe(
                    map(() => AppActions.deleteProjectSuccess()),
                )
            )
        )
    );

    deleteProjectMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteProjectTeamMember),
            switchMap(action =>
                this.projectService.deleteProjectMember(action.email).pipe(
                    map(() => AppActions.deleteProjectTeamMemberSuccess()),
                )
            )
        )
    );

    addProjectMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.addProjectTeamMember),
            switchMap(action =>
                this.projectService.addProjectMember(action.email).pipe(
                    map(() => AppActions.addProjectTeamMemberSuccess()),
                )
            )
        )
    );
    
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private bugsService: BugsService,
        private errorsService: ErrorsService,
        private projectService: ProjectService
    ) { }
}