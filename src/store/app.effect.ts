import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    ofType
} from '@ngrx/effects';
import {
    map,
    switchMap, catchError
} from 'rxjs/operators';
import { Router } from "@angular/router"
import { EMPTY } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AppActions } from './app.action';
import { BugsService } from '../services/bugs.service';
import { ErrorsService } from '../services/errors.service';
import { ProjectService } from '../services/project.service';
import { TeamService } from '../services/team.service';
import { SnackBarNotificationService } from '../services/snackbar-notification.service';



@Injectable()
export class AppEffects {

    fetchBugs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchBugs),
            switchMap((action) =>
                this.bugsService.fetchBugs(action.projectId).pipe(
                    map((results) => AppActions.fetchBugsSuccess(results)),
                )
            )
        )
    );

    fetchErrors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchErrors),
            switchMap((action) =>
                this.errorsService.fetchErrors(action.projectId).pipe(
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
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'delete error success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.deleteErrorSuccess(action.errorId);
                    }),
                )
            )
        )
    );

    resolveBug$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.resolveBug),
            switchMap(action =>
                this.bugsService.markBugAsError(action.bugId).pipe(
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'resolve bug success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.resolveBugSuccess(action.bugId)
                    }),
                )
            )
        )
    );

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.login),
            switchMap(action =>
                this.authService.login(action.data).pipe(
                    map((res) => {
                        localStorage.setItem('token', res.token.sessionId);
                        localStorage.setItem('isAdmin', res.token.isAdmin);
                        localStorage.setItem('name', res.user.name);
                        this.snackBarNotificationService.success({ message: 'login success', horizontalPosition: 'right', verticalPosition: 'top' });
                        this.router.navigate(['/dashboard']);
                        return AppActions.loginSuccess();
                    }),
                )
            )
        )
    );

    signup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.signUp),
            switchMap(action =>
                this.authService.signUp(action.data).pipe(
                    map((res) => {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('isAdmin', JSON.stringify(true));
                        localStorage.setItem('name', res.user.name);
                        this.snackBarNotificationService.success({ message: 'SignUp success', horizontalPosition: 'right', verticalPosition: 'top' });
                        this.router.navigate(['/dashboard']);
                        return AppActions.signUpSuccess();
                    }),
                )
            )
        )
    );

    addProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.addProject),
            switchMap(action =>
                this.projectService.addProject(action.name).pipe(
                    map((res) => {
                        this.snackBarNotificationService.success({ message: 'Add Project success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.addProjectSuccess(res)
                    }),
                )
            )
        )
    );

    getProjectUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchProjectUsers),
            switchMap(action =>
                this.projectService.getProjectUsers(action.projectId).pipe(
                    map((res) => AppActions.fetchProjectUsersSuccess(res)),
                )
            )
        )
    );

    convertErrorToBug$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.convertErrorToBug),
            switchMap(action =>
                this.errorsService.convertErrorToBug(action.errorId, action.name, action.userId).pipe(
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'Error Assign To The develope successfully', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.convertErrorToBugSuccess(action.errorId)
                    }),
                )
            )
        )
    );

    deleteProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteProject),
            switchMap(action =>
                this.projectService.deleteProject(action.projectId).pipe(
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'Delete Project success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.deleteProjectSuccess()
                    }),
                )
            )
        )
    );

    renameProjectMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.renameProject),
            switchMap(action =>
                this.projectService.renameProjectMember(action.projectId, action.projectName).pipe(
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'Rename Project success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.renameProjectSuccess(action.projectId, action.projectName)
                    }),
                    catchError(() => EMPTY)
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
                this.projectService.deleteProjectMember(action.id, action.projectId).pipe(
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'Delete Project Member Success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.deleteProjectTeamMemberSuccess()
                    }),
                )
            )
        )
    );


    addProjectMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.addProjectTeamMember),
            switchMap(action =>
                this.projectService.addProjectMember(action.user.id, action.projectId).pipe(
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'Add Project Member Success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.addProjectTeamMemberSuccess(action.user, action.projectId)
                    }),
                )
            )
        )
    );

    addTeamMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.addTeamMember),
            switchMap(action =>
                this.teamService.addTeamMember(action.email, action.name).pipe(
                    map((res) => {
                        this.snackBarNotificationService.success({ message: 'Add Team Member Success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.addTeamMemberSuccess(res)
                    }),
                )
            )
        )
    );

    deleteTeamMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteTeamMember),
            switchMap(action =>
                this.teamService.deleteTeamMember(action.id).pipe(
                    map(() => {
                        this.snackBarNotificationService.success({ message: 'Delete Team Member Success', horizontalPosition: 'right', verticalPosition: 'top' })
                        return AppActions.deleteTeamMemberSuccess(action.id)
                    }),
                )
            )
        )
    );

    getTeamMember$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.getTeamMembers),
            switchMap(() =>
                this.teamService.getTeamMembers().pipe(
                    map((res) => AppActions.getTeamMembersSuccess(res)),
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthService,
        private bugsService: BugsService,
        private errorsService: ErrorsService,
        private projectService: ProjectService,
        private teamService: TeamService,
        private snackBarNotificationService: SnackBarNotificationService,
    ) { }
}