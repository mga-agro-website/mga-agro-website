# 🚀 Quick Deployment Steps

## Railway (Recommended - Easiest)

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy on Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect and deploy!

### 3. Connect GoDaddy Domain

**In Railway:**
- Project → Settings → Domains → Add Custom Domain
- Enter: `mgaagro.com` (or your domain)

**In GoDaddy:**
- DNS Management → Add Record:
  - Type: `CNAME`
  - Name: `@` (for root) or `www` (for subdomain)
  - Value: `your-app.railway.app` (Railway will show this)
  - TTL: `600`

**Wait 5-30 minutes** for DNS to propagate. Railway will auto-enable HTTPS! ✅

---

## Alternative: Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. New → Web Service → Connect repo
4. Build: `npm run build`
5. Start: `npm start`
6. Deploy!

---

## ⚠️ Important Notes

1. **Videos are large** - Consider:
   - Compressing VIDEO1.mp4 and VIDEO2.mp4
   - Or hosting on Cloudflare/CDN

2. **Test build first:**
   ```bash
   npm run build
   npm start
   ```

3. **Environment Variables** (if needed):
   - Railway/Render dashboard → Variables
   - Add: `NODE_ENV=production`

---

## ✅ That's It!

Your app will be live at: `https://your-domain.com` 🎉

