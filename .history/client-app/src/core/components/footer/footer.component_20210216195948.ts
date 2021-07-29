import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Environments } from '@libs/core/models/environments.enum';
import { environment } from '@root/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  version = environment.version;
  isSandboxOrStagingOrProd = environment.name === Environments.Production
    || environment.name === Environments.Sandbox
    || environment.name === Environments.Staging;

  constructor() { }


}
