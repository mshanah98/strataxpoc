# Stratax - Tax Strategy Landing Page

A pure HTML/CSS landing page for Stratax tax consulting services, with optional visual editing through Tina Cloud.

## 🚀 Quick Setup Guide

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `stratax-site` (or your preferred name)
3. Set to **Public** (required for GitHub Pages)
4. Do NOT initialize with README
5. Click "Create repository"

### Step 2: Upload Files
1. Download these files from the artifacts:
   - `index.html` - Your website
   - `README.md` - This file
   - `.gitignore` - Git configuration
   - `tina/config.ts` - Tina Cloud configuration (optional)

2. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stratax-site.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo's Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Click Save
5. Your site will be live at: `https://YOUR_USERNAME.github.io/stratax-site`

### Step 4: Set Up Tina Cloud (Optional)
If you want visual editing:
1. Sign up at [app.tina.io](https://app.tina.io)
2. Click "New Project"
3. Connect your GitHub repository
4. Get your `clientId` and `token`
5. Update `tina/config.ts` with your credentials
6. Commit and push the changes

## 📁 Project Structure
```
stratax-site/
├── index.html          # Your website (pure HTML/CSS)
├── README.md           # This file
├── .gitignore          # Git ignore file
└── tina/               # Optional - for visual editing
    └── config.ts       # Tina Cloud configuration
```

## ✨ Key Features
- ✅ **Pure HTML/CSS** - No JavaScript on the live site
- ✅ **GitHub Pages hosting** - Free and reliable
- ✅ **Optional CMS** - Add Tina Cloud only if needed
- ✅ **Mobile responsive** - Works on all devices
- ✅ **Fast loading** - No build process or dependencies

## 📝 Editing Content

### Option 1: Direct GitHub Editing (Simplest)
1. Go to your repo on GitHub
2. Click on `index.html`
3. Click the pencil icon to edit
4. Make changes
5. Commit directly to main branch
6. Changes go live in ~1 minute

### Option 2: Local Editing
1. Clone your repo
2. Edit `index.html` in any text editor
3. Push changes to GitHub
4. Changes go live automatically

### Option 3: Tina Cloud (Visual Editor)
1. Complete Tina Cloud setup (Step 4 above)
2. Go to [app.tina.io](https://app.tina.io)
3. Select your project
4. Edit visually
5. Save to publish

## 🎨 Customization

### Change Colors/Styles
Edit the `<style>` section in `index.html`

### Update Content
- Hero text: Lines 245-247
- Strategy cards: Lines 263-311
- Benefits: Lines 329-360
- Form link: Line 380

### Add Google Analytics
Replace the placeholder on line 441 with your GA4 code

## 🚦 Status Checklist
- [ ] Repository created on GitHub
- [ ] Files uploaded
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] Content customized
- [ ] Form link updated
- [ ] Tina Cloud connected (optional)

## 🆘 Troubleshooting

**Site not showing up?**
- Check Settings → Pages is enabled
- Wait 2-10 minutes for initial deployment
- Ensure repository is public

**404 Error?**
- Verify `index.html` is in the root directory
- Check the URL includes the repository name

**Tina Cloud issues?**
- Ensure credentials are correct in `tina/config.ts`
- Repository must be connected in Tina Cloud dashboard

---

**Note**: This is a static site. Form submissions should be handled by external services like JotForm, Typeform, or similar.
