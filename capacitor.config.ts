import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'therapy.webapp',
  appName: 'therapy-webapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
