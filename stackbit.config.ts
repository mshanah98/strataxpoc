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
          name: 'page_content',
          type: 'data',
          filePath: 'content.json',
          fields: [
            { name: 'hero_headline', type: 'string', required: true },
            { name: 'hero_subtitle', type: 'text' },
            { name: 'cta_title', type: 'string' },
            { name: 'cta_description', type: 'text' },
            { name: 'cta_button_text', type: 'string' },
            { name: 'strategies_title', type: 'string' },
            { name: 'strategies_subtitle', type: 'text' },
            { name: 'benefits_title', type: 'string' },
            { name: 'final_cta_title', type: 'string' },
            { name: 'final_cta_subtitle', type: 'text' },
            { name: 'final_cta_button', type: 'string' },
            { name: 'disclaimer', type: 'string' },
            { name: 'footer_text', type: 'string' }
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
