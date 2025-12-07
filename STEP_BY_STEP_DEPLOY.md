# 🚀 STEP BY STEP - Railway Deployment Guide

## 📝 STEP 1: GitHub-এ Code Push করুন

### 1.1 Terminal খুলুন (PowerShell বা Command Prompt)

```bash
# Project folder-এ যান
cd "C:\Users\hp_4c\OneDrive\Desktop\Royal-Basmati-Mills\Royal-Basmati-Mills\Royal-Basmati-Mills"
```

### 1.2 Git Status Check করুন

```bash
git status
```

### 1.3 সব Changes Add করুন

```bash
git add .
```

### 1.4 Commit করুন

```bash
git commit -m "Ready for Railway deployment"
```

### 1.5 GitHub-এ Push করুন

```bash
git push origin main
```

**✅ যদি GitHub repo এখনো তৈরি না করেন:**
1. GitHub.com-এ যান
2. "New repository" click করুন
3. Repository name দিন (যেমন: `mga-agro-website`)
4. "Create repository" click করুন
5. তারপর এই commands run করুন:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## 📝 STEP 2: Railway Account তৈরি করুন

### 2.1 Railway Website-এ যান

1. Browser খুলুন
2. যান: **https://railway.app**
3. **"Start a New Project"** বা **"Login"** button click করুন

### 2.2 GitHub দিয়ে Sign Up করুন

1. **"Login with GitHub"** button click করুন
2. GitHub credentials দিয়ে login করুন
3. Railway-কে access permission দিন
4. **"Authorize Railway"** click করুন

**✅ Account তৈরি হয়ে গেছে!**

---

## 📝 STEP 3: New Project তৈরি করুন

### 3.1 Dashboard-এ যান

1. Railway dashboard-এ **"New Project"** button দেখবেন
2. Click করুন

### 3.2 GitHub Repo Select করুন

1. **"Deploy from GitHub repo"** option select করুন
2. আপনার GitHub repositories list দেখাবে
3. **আপনার repository select করুন** (যেমন: `Royal-Basmati-Mills` বা `mga-agro-website`)
4. Click করুন

### 3.3 Railway Auto-Deploy শুরু করবে

- Railway automatically:
  - ✅ আপনার code detect করবে
  - ✅ Build process start করবে
  - ✅ Deployment শুরু করবে

**⏱️ 3-5 minutes wait করুন**

---

## 📝 STEP 4: Build Process Monitor করুন

### 4.1 Build Logs দেখুন

1. Railway dashboard-এ **"Deployments"** tab-এ যান
2. Real-time build logs দেখবেন:
   - `npm install` running
   - `npm run build` running
   - Files building...

### 4.2 Success Check করুন

Look for:
- ✅ **"Build successful"**
- ✅ **"Deployment successful"**
- ✅ **"Your service is live"**

**❌ যদি Error দেখেন:**
- Error message read করুন
- Build logs check করুন
- Common issues:
  - Missing dependencies → `package.json` check করুন
  - Build script error → `npm run build` locally test করুন

---

## 📝 STEP 5: App URL পান

### 5.1 Domain Generate করুন

1. Deployment successful হলে
2. **"Generate Domain"** button click করুন
3. Railway automatically একটি domain দেবে:
   - Example: `your-app-name.up.railway.app`
   - বা: `mga-agro-production.up.railway.app`

### 5.2 App Test করুন

1. দেওয়া URL-এ click করুন
2. Browser-এ আপনার website open হবে
3. সব pages check করুন:
   - ✅ Home page loads
   - ✅ Navigation works
   - ✅ Images load
   - ✅ Videos play

**🎉 আপনার app এখন live!**

---

## 📝 STEP 6: GoDaddy Domain Connect করুন

### 6.1 Railway-এ Domain Add করুন

1. Railway dashboard-এ যান
2. **"Settings"** tab click করুন
3. Scroll down → **"Domains"** section
4. **"Custom Domain"** button click করুন
5. আপনার domain enter করুন: `mgaagro.com` (বা আপনার domain)
6. **"Add"** click করুন

### 6.2 Railway DNS Instructions দেখুন

Railway আপনাকে DNS configuration instructions দেবে:
- CNAME record value
- Example: `your-app.up.railway.app`

**এই value copy করুন!**

---

## 📝 STEP 7: GoDaddy DNS Configure করুন

### 7.1 GoDaddy Login করুন

1. **https://www.godaddy.com** যান
2. Login করুন
3. **"My Products"** section-এ যান

### 7.2 DNS Management খুলুন

1. আপনার domain find করুন
2. **"DNS"** বা **"Manage DNS"** button click করুন
3. DNS records page open হবে

### 7.3 CNAME Record Add করুন

1. **"Add"** বা **"Add Record"** button click করুন
2. Fill করুন:
   - **Type:** `CNAME` (dropdown থেকে select)
   - **Name:** `@` (root domain-এর জন্য) বা `www` (www subdomain-এর জন্য)
   - **Value:** Railway-এর দেওয়া hostname (যেমন: `your-app.up.railway.app`)
   - **TTL:** `600` (default রাখতে পারেন)
3. **"Save"** click করুন

### 7.4 DNS Propagation Wait করুন

- ⏱️ **5-30 minutes** usually লাগে
- Sometimes **24-48 hours** (rare)
- Railway dashboard-এ status check করতে পারেন

---

## 📝 STEP 8: HTTPS Certificate

### 8.1 Automatic HTTPS

Railway **automatically** SSL certificate provision করবে:
- ✅ DNS configured হওয়ার পর
- ✅ 5-10 minutes wait করুন
- ✅ Certificate automatically active হবে

### 8.2 Test করুন

1. Browser-এ যান: `https://your-domain.com`
2. ✅ Lock icon দেখবেন (HTTPS active)
3. ✅ Website load হবে

**🎉 সব setup complete!**

---

## 📝 STEP 9: Updates Deploy করুন

### 9.1 Code Update করুন

যেকোনো time code update করতে:

```bash
# Changes করুন
git add .
git commit -m "Update website"
git push
```

### 9.2 Railway Auto-Deploy

Railway **automatically**:
- ✅ New changes detect করবে
- ✅ Rebuild করবে
- ✅ Redeploy করবে

**⏱️ 2-3 minutes লাগবে**

---

## ✅ Final Checklist

Deployment complete হওয়ার পর check করুন:

- [ ] App Railway URL-এ accessible
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Images load properly
- [ ] Videos play
- [ ] API endpoints work (`/api/products`, etc.)
- [ ] Mobile view works
- [ ] Custom domain connected (if configured)
- [ ] HTTPS active
- [ ] No console errors

---

## 🐛 Common Issues & Solutions

### Issue 1: Build Fails
**Solution:**
- Build logs check করুন
- Locally test: `npm run build`
- Dependencies check করুন

### Issue 2: App Crashes
**Solution:**
- Railway logs check করুন
- Locally test: `npm start`
- PORT configuration check করুন (already configured ✅)

### Issue 3: Domain Not Working
**Solution:**
- DNS propagation wait করুন (24-48 hours)
- CNAME record verify করুন
- Railway domain settings check করুন

### Issue 4: Videos Not Loading
**Solution:**
- Video files large হতে পারে
- Check Railway file size limits
- Consider video compression

---

## 📞 Help Resources

- **Railway Docs:** https://docs.railway.app
- **Railway Discord:** https://discord.gg/railway
- **GoDaddy DNS Help:** https://www.godaddy.com/help

---

## 🎯 Quick Command Reference

```bash
# Git commands
git status
git add .
git commit -m "Your message"
git push

# Local testing
npm run build
npm start

# Check Railway
# → Go to railway.app dashboard
```

---

**🚀 আপনার website এখন live হবে!**

**Time needed:** 10-15 minutes total
**Difficulty:** Easy (Railway does most work automatically!)

