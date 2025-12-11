# Email Configuration Guide

This application is configured to send form submissions to **websitemaker2025@outlook.com** using Nodemailer with Outlook's SMTP server.

## Quick Setup

### 1. Create App Password in Outlook

Microsoft Outlook requires an "App Password" for applications to send emails securely.

**Steps to create an App Password:**

1. Go to [Microsoft Account Security Settings](https://account.microsoft.com/security)
2. Sign in with **websitemaker2025@outlook.com**
3. Navigate to **"Advanced security options"**
4. Under **"App passwords"**, click **"Create a new app password"**
5. Give it a name like "Website Form Mailer"
6. Copy the generated password (it will look like: `xxxx-xxxx-xxxx-xxxx`)

### 2. Configure Environment Variable

Create a `.env.local` file in the project root (it's already in .gitignore):

```bash
OUTLOOK_APP_PASSWORD=your-app-password-here
```

**Important:** Replace `your-app-password-here` with the actual app password you generated.

### 3. Verify Setup

Once configured, the application will:
- Send contact form submissions to websitemaker2025@outlook.com
- Send project requests from the start-project form
- Include all form data in a formatted HTML email

## Forms with Email Integration

### 1. Contact Form (`/contact`)
**Fields sent:**
- Name
- Email
- Phone
- Service Type
- Budget
- Message

**Email subject:** "New Contact Form Submission - [Service Type]"

### 2. Start Project Form (`/start-project`)
**Fields sent:**
- Business Name
- Business Type
- Project Type
- Budget
- Timeline
- Required Features
- Additional Details

**Email subject:** "New Project Request - [Business Name]"

## Technical Details

### SMTP Configuration
- **Host:** smtp-mail.outlook.com
- **Port:** 587
- **Security:** TLS
- **From:** websitemaker2025@outlook.com
- **To:** websitemaker2025@outlook.com

### API Endpoint
All forms submit to: `/api/send-email`

**Request format:**
```json
{
  "formType": "contact" | "start-project",
  "formData": {
    // Form fields
  }
}
```

**Success response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "..."
}
```

**Error response:**
```json
{
  "success": false,
  "error": "Error message",
  "details": "Additional error details"
}
```

## Troubleshooting

### Emails not sending?

**Check:**
1. ✅ `.env.local` file exists with `OUTLOOK_APP_PASSWORD`
2. ✅ App password is correct (no typos)
3. ✅ Outlook account is active and not locked
4. ✅ Check browser console for API errors
5. ✅ Check server logs for detailed error messages

### Common Issues

**"Authentication failed"**
- Your app password is incorrect
- Regenerate a new app password in Outlook

**"Connection timeout"**
- Check your internet connection
- Verify Outlook SMTP is not blocked by firewall

**"Invalid recipient"**
- Email address websitemaker2025@outlook.com should be valid
- Verify the account exists and is active

## Security Notes

- ⚠️ **Never commit** `.env.local` to version control
- ⚠️ App passwords should be kept secure and private
- ⚠️ Rotate app passwords periodically for security
- ✅ `.env.local` is already in `.gitignore`
- ✅ Only the API route has access to the password
- ✅ Password is stored in environment variables, not in code

## Development vs Production

### Development (local)
- Uses `.env.local` file
- Emails send from your local machine
- Test submissions won't affect production

### Production (deployed)
- Set `OUTLOOK_APP_PASSWORD` in your hosting environment variables
- Examples:
  - **Vercel:** Project Settings → Environment Variables
  - **Netlify:** Site Settings → Build & Deploy → Environment
  - **AWS/Heroku:** Use their CLI or dashboard to set env vars

## Email Templates

Emails are sent with professional HTML formatting including:
- Branded headers with color scheme
- Organized table layouts for form data
- Responsive design for mobile viewing
- Timestamp and submission source information

## Support

If you have issues with email setup:
1. Check the troubleshooting section above
2. Verify your Outlook account security settings
3. Review server logs for specific error messages
4. Test with a simple email client first to verify credentials

---

**Configuration Complete!** Forms will now email submissions to websitemaker2025@outlook.com.
