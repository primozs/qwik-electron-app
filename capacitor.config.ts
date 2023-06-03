import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my-qwik-basic-starter',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
