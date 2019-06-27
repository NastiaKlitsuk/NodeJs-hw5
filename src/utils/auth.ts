import app_config, { KnownConfigKey } from '../configurations/app-config';

export function isAuthRequired() {
  return app_config.get(KnownConfigKey.IsAuthRequired) === 'true';
}
