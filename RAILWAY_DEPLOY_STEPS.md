# 🚂 Railway Deployment - Step by Step

## ✅ Pre-Deployment Checklist

Before deploying, make sure:
- [ ] Code is pushed to GitHub
- [ ] `npm run build` works locally
- [ ] `npm start` works locally
- [ ] All files are committed

---

## 📋 Step-by-Step Railway Deployment

### Step 1: Push to GitHub

```bash
# If not already done:
git add .
git commit -m "Ready for Railway deployment"
git push origin main
```

### Step 2: Sign Up on Railway

1. Go to **https://railway.app**
2. Click **"Start a New Project"** or **"Login"**
3. Choose **"Login with GitHub"**
4. Authorize Railway to access your GitHub account

### Step 3: Create New Project

1. After logging in, click **"New Project"** (big button)
2. Select **"Deploy from GitHub repo"**
3. You'll see a list of your GitHub repositories
4. **Select your repository** (Royal-Basmati-Mills or whatever you named it)
5. Railway will start deploying automatically!

### Step 4: Configure Build Settings (Auto-detected)

Railway will automatically detect:
- **Build Command:** `npm run build` ✅
- **Start Command:** `npm start` ✅
- **Root Directory:** `/` (root) ✅

**You don't need to change anything!** Railway uses the `railway.json` file we created.

### Step 5: Wait for Deployment

- Railway will show build logs in real-time
- First deployment takes 3-5 minutes
- Watch for:
  - ✅ "Build successful"
  - ✅ "Deployment successful"
  - ✅ "Your service is live"

### Step 6: Get Your App URL

1. After deployment, you'll see a **"Generate Domain"** button
2. Click it to get a free Railway domain like: `your-app.railway.app`
3. Your app is now live! 🎉

---

## 🌐 Connect GoDaddy Domain

### In Railway:

1. Go to your project
2. Click on **"Settings"** tab
3. Scroll to **"Domains"** section
4. Click **"Custom Domain"**
5. Enter your domain: `mgaagro.com` (or your domain)
6. Railway will show you DNS instructions

### In GoDaddy:

1. Login to **GoDaddy.com**
2. Go to **"My Products"** → **"DNS"** (or **"Manage DNS"**)
3. Find your domain and click **"DNS"** or **"Manage"**

4. **Add CNAME Record:**
   - **Type:** `CNAME`
   - **Name:** `@` (for root domain) OR `www` (for www subdomain)
   - **Value:** Railway-এর দেওয়া hostname (like `your-app.railway.app`)
   - **TTL:** `600` (or default)

5. **Save** the DNS record

### Wait for DNS Propagation:

- ⏱️ Usually takes **5-30 minutes**
- Sometimes up to **24-48 hours** (rare)
- Check status in Railway dashboard

### HTTPS Certificate:

- Railway **automatically** provisions SSL certificate
- Wait a few minutes after DNS is configured
- Your site will be available at `https://your-domain.com` ✅

---

## 🔧 Railway Dashboard Overview

After deployment, you'll see:

1. **Deployments Tab:**
   - See all deployments
   - View build logs
   - Rollback if needed

2. **Variables Tab:**
   - Add environment variables
   - Railway auto-sets: `PORT`, `NODE_ENV`
   - Add custom vars if needed

3. **Settings Tab:**
   - Domain configuration
   - Service settings
   - Delete service

4. **Metrics Tab:**
   - CPU, Memory usage
   - Request logs
   - Performance metrics

---

## 🐛 Troubleshooting

### Build Fails:

**Problem:** Build command fails
**Solution:**
- Check build logs in Railway
- Ensure `npm run build` works locally
- Check if all dependencies are in `package.json`

### App Crashes:

**Problem:** App starts but crashes
**Solution:**
- Check logs in Railway dashboard
- Verify `npm start` works locally
- Check if PORT is correctly used (already configured ✅)

### Domain Not Working:

**Problem:** Domain shows error or doesn't load
**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify CNAME record in GoDaddy
- Check Railway domain settings
- Ensure DNS record points to correct Railway hostname

### Videos Not Loading:

**Problem:** Large video files cause issues
**Solution:**
- Videos are in `client/public/` - they'll be deployed
- If too large, consider:
  - Compressing videos
  - Using CDN (Cloudflare, AWS S3)
  - Hosting videos separately

---

## 💰 Railway Pricing

**Free Tier:**
- $5 credit/month
- 500 hours runtime
- Perfect for preview/testing

**Paid Plans:**
- Start at $5/month
- More resources
- Better performance

---

## 🔄 Auto-Deploy

Railway automatically deploys when you:
- Push to `main` branch (default)
- Can configure in Settings → Source

**To deploy updates:**
```bash
git add .
git commit -m "Update website"
git push
```
Railway will automatically rebuild and deploy! 🚀

---

## ✅ Success Checklist

After deployment:
- [ ] App is accessible at Railway URL
- [ ] All pages load correctly
- [ ] API endpoints work (`/api/products`, etc.)
- [ ] Images and videos load
- [ ] Domain is connected (if configured)
- [ ] HTTPS is active
- [ ] Mobile view works

---

## 📞 Need Help?

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Railway Support: support@railway.app

---

**Your app should be live in 5-10 minutes! 🎉**

