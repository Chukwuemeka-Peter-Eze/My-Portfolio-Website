# Troubleshooting Guide: Resend Domain Verification Failure

## Overview

This document outlines the investigation and resolution of a production issue affecting the contact form on my portfolio website.

The issue prevented visitors from successfully submitting the contact form. Through systematic troubleshooting, I identified the root cause, restored DNS configuration, and successfully resolved the problem.

---

# Environment

- **Frontend:** Next.js Portfolio Website
- **Hosting:** AWS CloudFront
- **DNS:** Amazon Route 53
- **Domain Registrar:** Namecheap
- **Email Provider:** Resend
- **Custom Domain:** chukwuemekapetereze.online

---

# Symptoms

The contact form stopped working unexpectedly.

When a visitor submitted the form:

- A "Something went wrong. Please try again." message was displayed.
- The contact request was not delivered via email.

The website itself remained fully functional.

---

# Initial Investigation

Using Chrome Developer Tools (F12):

## Network Tab

Observed:

```
POST /api/contact

500 Internal Server Error
```

This indicated that the backend API responsible for sending emails was failing.

---

## Console Output

```
POST https://chukwuemekapetereze.online/api/contact

500 Internal Server Error
```

Additionally, a separate CORS warning related to the Medium RSS feed was present, but it was unrelated to the contact form issue.

---

# API Response

Inspecting the Response tab revealed the actual error:

```json
{
  "success": false,
  "error": {
    "statusCode": 403,
    "message": "The chukwuemekapetereze.online domain is not verified.",
    "name": "validation_error"
  }
}
```

This confirmed that the application itself was working correctly.

The email provider (Resend) was rejecting the request because the sending domain had not been verified.

---

# Root Cause Analysis

Investigation confirmed:

## Namecheap

The domain registration was valid.

The nameservers correctly pointed to AWS Route 53.

---

## Route 53

The hosted zone contained only:

- A Record (CloudFront)
- NS Record
- SOA Record
- ACM Certificate Validation CNAME
- WWW CNAME

The required DNS records for Resend were missing.

---

## Resend

The domain status showed:

```
Failed
```

### Verification Status

<p align="center">
<img src="public/assets/resend-failed.png.png" width="1000">
</p>


All required DNS records failed verification:

- DKIM
- SPF
- MX
- DMARC

---

# Root Cause

The Route 53 hosted zone no longer contained the DNS records required by Resend.

As a result:

- Resend could not verify ownership of the domain.
- Every email request was rejected.
- The API returned a 403 error.
- The frontend displayed a 500 Internal Server Error.

---

# Resolution

## Step 1

Removed the failed domain configuration from Resend.

---

## Step 2

Added the domain again.

```
chukwuemekapetereze.online
```

---

## Step 3

Generated fresh DNS records.

Resend generated:

- DKIM TXT Record
- SPF TXT Record
- MX Record
- DMARC TXT Record

---

## Step 4

Added all generated DNS records into AWS Route 53.

Created:

- TXT (DKIM)
- MX
- TXT (SPF)
- TXT (DMARC)

---

## Step 5

Allowed DNS propagation.

---

## Step 6

Restarted domain verification inside Resend.

Status changed to:

```
Verified
```
### Verification Status

<p align="center">
<img src="public/assets/resend-verified.png.png" width="1000">
</p>

---

## Step 7

Retested the portfolio contact form.

Result:

```
Response sent successfully
```

The email was successfully delivered.

---

# Verification Checklist

- [x] Domain registered
- [x] Nameservers correctly configured
- [x] Route 53 hosted zone active
- [x] DKIM configured
- [x] SPF configured
- [x] MX configured
- [x] DMARC configured
- [x] Resend domain verified
- [x] API endpoint working
- [x] Contact form successfully sending emails

---

# Lessons Learned

## 1. Always inspect the API response

The browser initially reported only:

```
500 Internal Server Error
```

Inspecting the Response tab revealed the actual cause:

```
403 Domain not verified
```

The API response provided the critical information required to identify the root cause.

---

## 2. Verify DNS when email services fail

A working website does not guarantee that email services are correctly configured.

CloudFront and Route 53 can continue serving a website even when email-related DNS records are missing.

---

## 3. DNS records are service-specific

Different services require different DNS records.

For this project:

- CloudFront required A and CNAME records.
- ACM required certificate validation records.
- Resend required DKIM, SPF, MX, and DMARC records.

Each service depends on its own DNS configuration.

---

## 4. Follow a structured troubleshooting process

Instead of guessing, use a systematic approach:

1. Reproduce the issue.
2. Inspect browser developer tools.
3. Analyze HTTP status codes.
4. Review API responses.
5. Verify third-party service configuration.
6. Inspect DNS records.
7. Apply the fix.
8. Validate the solution.

This approach reduces troubleshooting time and improves reliability.

---

# Skills Demonstrated

- DNS Troubleshooting
- Amazon Route 53
- CloudFront
- Resend Email Service
- HTTP Status Code Analysis
- Browser Developer Tools
- API Debugging
- Root Cause Analysis
- Production Incident Resolution
- Technical Documentation
g
---

# Outcome

The portfolio contact form was successfully restored by reconfiguring and verifying the required DNS records in Amazon Route 53 for the Resend email service.

All functionality was confirmed through successful end-to-end testing.