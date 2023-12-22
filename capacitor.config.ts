import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'therapy.webapp',
  appName: 'therapy-webapp',
  webDir: 'src',
  server: {
    androidScheme: 'https'
  }
};

export default config;
