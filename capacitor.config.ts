import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zorays.app',
  appName: 'Zorays Solar',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;