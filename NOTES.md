# Handling Common Security Pitfalls

### 1. Leaked Keys and Weak Auth
- Supabase vault for storing API keys `must`
- Key rotation through supabase cron and edge function triggering `must`
- Enable MFA for admins `must`
- Rate limit origins `must`
- Session exipry `must`
- Fingerprint devices `optional`

### 2. Sessions and Tokens
- Rotate refresh tokens `must`
- Clear tokens on logout `must`
- 5 login attempts max / 15 minute `must`
- Log every auth action `must`

### 3. Unauthorized Access
- Enable RLS on all tables
- Use auth.uid() in rules `must`
- Isolate tenanets `must`
- Test access with different roles `must`
- Restrict service roles `optional`

### 4. PII stored raw
- Use soft deletes
- Add audit trails (who, what, when)
- Run daily backups + restore drills monthly `must`

### 5. DDoS and Scraping
- Global rate limit :: 100 req/min/ip `must`
- Lower limits on heavy endpoints `must`
- Use cloudflare or vercel `must`
- Enable "Under Attack" mode `optional`
- Geo-block unserved regions `optional`

### 6. Devtools, XSS, SPAM (frontend)
- Disable devtools in prod `must`
- HMAC sensitive requests `optional`
- Add CSP, HSTS, CORS rules `optional`
- Rate limit buttons `must`
- use SRI for external scripts `optional`

### 7. Input Validation
- Sanitize all user input `must`
- Validate on backend only `must `
- Restrict uploads (type, size, virus scan) `must`
- Strip metadata from files `must`
- Use parameterized queries `must`

### 8. Monitor
- Use sentry for error `optional`
- Log all failed auth, exports, denials `must`
- Create incident response plan `optional`
- Review logs monthly `optional`
- Set alerts via slack / email / discord `must`
