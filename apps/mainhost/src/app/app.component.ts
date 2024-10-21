import { Component, inject, NgZone, PlatformRef } from '@angular/core';
import { loadRemoteModule, setRemoteDefinitions } from '@nx/angular/mf';

const remoteName = 'secondaryhost';
const remoteEntry = 'http://localhost:4201';
const moduleName = 'AppModule';
const modulePath = `./${moduleName}`;

@Component({
  selector: 'app-root',
  template: `
    <div style="background-color: burlywood; padding: 10px">
      <h1>Main host</h1>
      <secondary-root></secondary-root>
      <h1>End Main host</h1>
    </div>
  `,
})
export class AppComponent {
  platformRef = inject(PlatformRef);
  ngZone = inject(NgZone);

  constructor() {
    this.loadSecondaryHost();
  }

  async loadSecondaryHost() {
    await this.ngZone.runOutsideAngular(async () => {
      setRemoteDefinitions({ [remoteName]: remoteEntry });

      const module = await loadRemoteModule(remoteName, modulePath).then(
        (module) => module[moduleName]
      );

      await this.platformRef.bootstrapModule(module);
    });
  }
}
