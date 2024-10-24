import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'myremote',
  exposes: {
    './Routes': 'apps/myremote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
