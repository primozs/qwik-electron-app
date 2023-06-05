import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-qwik-basic-starter",
  webDir: "dist/renderer",
  server: {
    androidScheme: "https",
  },
};

export default config;
