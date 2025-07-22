import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  contentSources: [
    {
      name: 'git',
      type: 'git',
      models: [
        {
          name: 'site_config',
          type: 'data',
          filePath: 'site-config.json',
          fields: [
            { name: 'company_name', type: 'string', required: true },
            { name: 'hero_headline', type: 'string', required: true },
            { name: 'hero_subtitle', type: 'text' },
            { name: 'cta_button_text', type: 'string' },
            { name: 'cta_button_url', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'email', type: 'string' }
          ]
        },
        {
          name: 'homepage',
          type: 'page',
          urlPath: '/',
          filePath: 'index.html',
          fields: [
            { name: 'title', type: 'string' }
          ]
        }
      ]
    }
  ]
});
