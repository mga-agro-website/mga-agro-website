# 🚀 Deployment Guide - MGA Agro Website

## Best Deployment Options

### Option 1: Railway (Recommended) ⭐
**Best for:** Full-stack apps with Express backend
- ✅ Free tier available ($5 credit/month)
- ✅ Easy deployment from GitHub
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Environment variables management
- ✅ Auto-deploy on git push

### Option 2: Render
**Best for:** Full-stack apps
- ✅ Free tier available
- ✅ Easy setup
- ✅ Custom domain support
- ⚠️ Free tier spins down after inactivity

### Option 3: Vercel (Frontend) + Railway (Backend)
**Best for:** Separate frontend/backend
- ✅ Vercel: Excellent for React apps
- ✅ Railway: For Express backend
- ⚠️ Need to configure CORS

---

## 🎯 Recommended: Railway Deployment (Full-Stack)

### Step 1: Prepare Your Code

1. **Create `.railway.json` (optional but recommended)**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

2. **Create `railway.toml` (optional)**
```toml
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "npm start"
healthcheckPath = "/"
healthcheckTimeout = 100
```

### Step 2: Push to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Railway

1. **Sign up/Login:**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Build Settings:**
   - Railway will auto-detect Node.js
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Root Directory: `/` (root)

4. **Set Environment Variables (if needed):**
   - Go to Variables tab
   - Add: `NODE_ENV=production`
   - Add any other env vars your app needs

5. **Deploy:**
   - Railway will automatically build and deploy
   - Wait for deployment to complete
   - You'll get a URL like: `your-app.railway.app`

### Step 4: Connect GoDaddy Domain

1. **In Railway:**
   - Go to your project → Settings → Domains
   - Click "Custom Domain"
   - Enter your domain (e.g., `mgaagro.com`)

2. **In GoDaddy:**
   - Login to GoDaddy
   - Go to DNS Management
   - Add/Edit DNS Records:
   
   **For Root Domain (mgaagro.com):**
   ```
   Type: CNAME
   Name: @
   Value: your-app.railway.app
   TTL: 600
   ```
   
   **OR for Subdomain (www.mgaagro.com):**
   ```
   Type: CNAME
   Name: www
   Value: your-app.railway.app
   TTL: 600
   ```

3. **Wait for DNS Propagation:**
   - Can take 5 minutes to 48 hours
   - Usually works within 1-2 hours

4. **Enable HTTPS:**
   - Railway automatically provisions SSL certificate
   - Wait a few minutes after DNS is configured

---

## 🔧 Alternative: Render Deployment

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Render

1. **Sign up:** [render.com](https://render.com) with GitHub

2. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repo
   - Select your repository

3. **Configure:**
   - **Name:** mga-agro-website
   - **Environment:** Node
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid)

4. **Environment Variables:**
   - Add: `NODE_ENV=production`

5. **Deploy:**
   - Click "Create Web Service"
   - Render will build and deploy

### Step 3: Connect Domain (Render)

1. **In Render:**
   - Go to Settings → Custom Domains
   - Add your domain

2. **In GoDaddy:**
   - Add CNAME record pointing to Render's provided hostname

---

## 📝 Important Notes

### Before Deployment:

1. **Check `package.json` scripts:**
   ```json
   {
     "build": "tsx script/build.ts",
     "start": "cross-env NODE_ENV=production node dist/index.cjs"
   }
   ```

2. **Ensure build script works:**
   ```bash
   npm run build
   ```

3. **Test production build locally:**
   ```bash
   npm start
   ```

### Environment Variables to Set:

- `NODE_ENV=production` (usually auto-set)
- Any API keys or secrets your app uses

### File Size Considerations:

- Your videos (VIDEO1.mp4, VIDEO2.mp4) might be large
- Consider:
  - Compressing videos
  - Using CDN for videos (Cloudflare, AWS S3)
  - Or hosting videos separately

---

## 🎬 Quick Start Commands

```bash
# 1. Test build locally
npm run build
npm start

# 2. If build works, push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# 3. Deploy on Railway/Render
# Follow steps above
```

---

## 🆘 Troubleshooting

### Build Fails:
- Check build logs in Railway/Render dashboard
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility

### Domain Not Working:
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify CNAME/A record points to correct hostname

### App Crashes:
- Check logs in Railway/Render dashboard
- Verify environment variables are set
- Check if port is correctly configured (Railway auto-assigns PORT)

---

## 📞 Need Help?

- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
- GoDaddy DNS Help: https://www.godaddy.com/help

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Build works locally (`npm run build`)
- [ ] Production start works (`npm start`)
- [ ] Environment variables configured
- [ ] Deployed on Railway/Render
- [ ] Domain connected in GoDaddy
- [ ] DNS records configured
- [ ] HTTPS certificate active
- [ ] Website accessible on custom domain

---

**Good luck with your deployment! 🚀**

