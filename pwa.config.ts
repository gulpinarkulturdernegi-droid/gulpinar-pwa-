import { defineConfig } from '@/types/config';
export default defineConfig({
  manifest: {
    id: '/',
    name: 'Gülpınar Derneği Yönetim Paneli',
    short_name: 'Gülpınar Yönetim',
    description: 'Gülpınar Kültür Dayanışma ve Yardımlaşma Derneği Yönetim Paneli',
    dir: 'ltr',
    lang: 'tr-TR',
    background_color: '#071a35',
    theme_color: '#071a35',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/?utm_source=homescreen',
    prefer_related_applications: false,
    shortcuts: [],
  },
  pwa: {
    logs: true,
  },
  oneSignal: {
    enabled: false,
    appId: '********-****-****-****-************',
    allowLocalhostAsSecureOrigin: true,
  },
  origin: 'https://gulpinarmahallesidernegi.blogspot.com',
});
