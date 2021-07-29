import { ToastType } from '@core/models/toast-type.enum';
export interface ToastMessage {
  message: string;
  toastType: ToastType;
}
