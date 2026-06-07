# Deployment Guide - Jaina Beauté Website

## Quick Start

The website is ready for deployment! All static files are in the `out/` directory after building.

## GitHub Pages Deployment

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Luxury salon website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jaina-beaute.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy on every push to `main`

### Step 3: Access Your Site

Your site will be available at:
- `https://YOUR-USERNAME.github.io/jaina-beaute/`

## Custom Domain (Optional)

### For Custom Domain (e.g., jainabeaute.com):

1. **Add CNAME file:**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS** with your domain provider:
   - Type: `A` Record
   - Host: `@`
   - Value: GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   
   - Type: `CNAME` Record
   - Host: `www`
   - Value: `YOUR-USERNAME.github.io`

3. **Enable HTTPS** in GitHub Pages settings (automatic after DNS propagation)

## Deploying to Subdirectory

If deploying to `username.github.io/jaina-beaute`:

1. **Update `next.config.ts`:**
   ```typescript
   basePath: '/jaina-beaute',
   ```

2. **Rebuild:**
   ```bash
   npm run build
   ```

3. **Push changes**

## Other Hosting Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
npm run build
netlify deploy --dir=out --prod
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Traditional Hosting (cPanel, FTP)

1. Build the site:
   ```bash
   npm run build
   ```

2. Upload contents of `out/` directory to your server's public_html or www folder

3. Done! The site is purely static HTML/CSS/JS

## Verification Checklist

After deployment:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Services page displays all offerings
- [ ] About page renders properly
- [ ] Contact page shows correct information
- [ ] Images load properly
- [ ] Smooth scrolling works
- [ ] Mobile responsive design works
- [ ] Booking button links to correct URL

## Troubleshooting

### Images Not Loading

- Check that image URLs are absolute (starting with https://)
- Ensure public folder contents are copied to build

### 404 Errors on Page Refresh

- This shouldn't happen with static export
- Check that trailing slashes are enabled in next.config.ts

### Booking URL Not Working

- Verify the booking URL in `lib/data.ts` is correct
- Test the link manually

## Performance Optimization

Run Lighthouse audit after deployment:

```bash
# Chrome DevTools > Lighthouse
# Target scores:
# - Performance: 95+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 95+
```

## Updating Content

1. **Update business data:** Edit `lib/data.ts`
2. **Update pages:** Edit files in `app/` directory
3. **Rebuild:** `npm run build`
4. **Deploy:** `git push` (if using GitHub Actions)

## Support

For issues:
- Check Next.js 16 documentation
- Review build logs in GitHub Actions
- Test locally with `npm run dev` before deploying

---

**Live Site Status**: The website is production-ready and optimized for luxury salon branding. All business information from the original site has been preserved and enhanced.
