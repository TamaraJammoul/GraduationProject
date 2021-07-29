/*import { toastMessageReducer, alertMessageReducer } from '@core/store/core.reducers';
import { coreActions } from '@core/store/core.actions';
import { ToastType } from '@core/models/toast-type.enum';
import { ToastMessage } from '@core/models/toast-message.model';
import { AlertMessage } from '@core/models/alert-message.model';
import { AlertType } from '@core/models/alert-type.enum';
describe(toastMessageReducer.name, () => {

  it('should update state  when displayToast is received', () => {
    const toast = { message: 'Testing', toastType: ToastType.success } as ToastMessage;

    const action = coreActions.displayToast(toast);
    const newState = toastMessageReducer(toast, action);
    expect(newState.message).toBe(toast.message);
    expect(newState.toastType).toBe(ToastType.success);
  });

  it('should update state to remove toast when hideToast is received', () => {
    const toast = { message: 'Testing' } as ToastMessage;

    const action = coreActions.displayToast(toast);
    let newState = toastMessageReducer(toast, action);
    expect(newState).toBe(toast);

    const hideAction = coreActions.hideToast();
    newState = toastMessageReducer(toast, hideAction);
    expect(newState).toBeUndefined();
  });

  it('should update state  when displayAlert is received', () => {
    const alert = { title: 'Title', message: 'Testing', alertType: AlertType.success } as AlertMessage;

    const action = coreActions.displayAlert(alert);
    const newState = alertMessageReducer(alert, action);
    expect(newState.title).toBe(alert.title);
    expect(newState.message).toBe(alert.message);
    expect(newState.alertType).toBe(AlertType.success);
  });

  it('should update state to remove alert when hideAlert is received', () => {
    const alert = { title: 'Title', message: 'Testing', alertType: AlertType.success } as AlertMessage;

    const action = coreActions.displayAlert(alert);
    let newState = alertMessageReducer(alert, action);
    expect(newState).toBe(alert);

    const hideAction = coreActions.hideAlert();
    newState = alertMessageReducer(alert, hideAction);
    expect(newState).toBeUndefined();
  });

});*/
