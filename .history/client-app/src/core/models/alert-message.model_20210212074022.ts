import { AlertType } from '@libs/core/models/alert-type.enum';
export interface AlertMessage {
  message: string;
  title: string;
  alertType: AlertType;
}
