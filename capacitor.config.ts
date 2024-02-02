import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fonttech.app',
  appName: 'fonttech',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
