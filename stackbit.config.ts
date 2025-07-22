// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["./"],
      models: [
        {
          name: "SiteContent",
          type: "data",
          filePath: "./content.json",
          fields: [
            { name: "hero_headline", type: "string" },
            { name: "hero_subtitle", type: "text" },
            { name: "cta_title", type: "string" },
            { name: "cta_description", type: "text" },
            { name: "cta_button_text", type: "string" },
            { name: "strategies_title", type: "string" },
            { name: "strategies_subtitle", type: "text" },
            { name: "benefits_title", type: "string" },
            { name: "final_cta_title", type: "string" },
            { name: "final_cta_subtitle", type: "text" },
            { name: "final_cta_button", type: "string" },
            { name: "disclaimer", type: "string" },
            { name: "footer_text", type: "string" }
          ]
        },
        {
          name: "Homepage",
          type: "page",
          urlPath: "/",
          filePath: "./index.html",
          fields: [
            { name: "title", type: "string" }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents }) => {
    return [
      {
        stableId: "homepage",
        urlPath: "/",
        document: documents.find(doc => doc.modelName === "Homepage")
      }
    ];
  }
});
