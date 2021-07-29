import { ToastType } from '@libs/core/models/toast-type.enum';
export interface ToastMessage {
  message: string;
  toastType: ToastType;
}
