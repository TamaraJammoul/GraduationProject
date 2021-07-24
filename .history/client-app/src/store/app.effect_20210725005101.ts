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
import { TeamService } from '../services/team.service';


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

    renameProjectMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.renameProject),
            switchMap(action =>
                this.projectService.renameProjectMember(action.projectId, action.projectName).pipe(
                    map(() => AppActions.renameProjectSuccess(action.projectId, action.projectName)),
                )
            )
        )
    );

    getProjects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getProject),
            switchMap(() =>
                this.projectService.getProjects().pipe(
                    map((res) => AppActions.getProjectSuccess(res)),
                )
            )
        )
    );

    deleteProjectMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteProjectTeamMember),
            switchMap(action =>
                this.projectService.deleteProjectMember(action.userId, action.projectId).pipe(
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

    addTeamMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.addTeamMember),
            switchMap(action =>
                this.teamService.addTeamMember(action.email).pipe(
                    map((res) => AppActions.addTeamMemberSuccess(res)),
                )
            )
        )
    );

    deleteTeamMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteTeamMember),
            switchMap(action =>
                this.teamService.deleteTeamMember(action.id).pipe(
                    map(() => AppActions.deleteTeamMemberSuccess()),
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private bugsService: BugsService,
        private errorsService: ErrorsService,
        private projectService: ProjectService,
        private teamService: TeamService
    ) { }
}