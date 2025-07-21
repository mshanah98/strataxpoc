import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // or "master" if that's your default branch
  clientId: "1790747b-24ff-4a34-9fbd-82ce7f93d4cb", // Get from app.tina.io
  token: "85ba961043c6c1a784978d47c9494cbf5bd28dab", // Get from app.tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage Content",
        path: "content",
        format: "json",
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { 
                type: "string", 
                name: "title", 
                label: "Main Heading",
                description: "The main headline that appears in the hero section"
              },
              { 
                type: "text", 
                name: "subtitle", 
                label: "Subtitle",
                description: "Supporting text under the main heading"
              },
              {
                type: "object",
                name: "treasureHunt",
                label: "Treasure Hunt CTA Box",
                fields: [
                  { type: "string", name: "title", label: "Box Title" },
                  { type: "text", name: "description", label: "Box Description" },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "buttonLink", label: "Button Link (URL)" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "strategies",
            label: "Tax Strategy Cards",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "New Strategy" };
              },
            },
            fields: [
              { 
                type: "string", 
                name: "icon", 
                label: "Icon (emoji)",
                description: "Use an emoji like 📊 or 💼"
              },
              { type: "string", name: "title", label: "Strategy Title" },
              { type: "text", name: "description", label: "Strategy Description" }
            ]
          },
          {
            type: "object",
            name: "benefits",
            label: "Why Choose Stratax Items",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "New Benefit" };
              },
            },
            fields: [
              { 
                type: "string", 
                name: "icon", 
                label: "Icon (emoji)",
                description: "Use an emoji like 🎯 or ⚡"
              },
              { type: "string", name: "title", label: "Benefit Title" },
              { type: "text", name: "description", label: "Benefit Description" }
            ]
          },
          {
            type: "object",
            name: "finalCta",
            label: "Final Call to Action Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "text", name: "subheading", label: "Section Subheading" },
              { type: "string", name: "buttonText", label: "Button Text" },
              { 
                type: "string", 
                name: "buttonLink", 
                label: "Button Link (URL)",
                description: "Your JotForm or contact form URL"
              }
            ]
          }
        ]
      }
    ]
  },
});
