# Cloud Shell helpers

Helper scripts for managing and checking the Firebase Hosting setup for `nikolaostolis.com`.

## Usage

From the repository root:

    source scripts/cloudshell/site-env
    scripts/cloudshell/site-check-dns
    scripts/cloudshell/site-check-firebase

## Expected DNS

    A      nikolaostolis.com      199.36.158.100
    TXT    nikolaostolis.com      hosting-site=nikolaos-tolis-site
    CNAME  www.nikolaostolis.com  nikolaos-tolis-site.web.app

## Notes

Do not commit access tokens, Cloudflare API tokens, service account keys, or `.env` files.

The Firebase access token is generated dynamically using:

    gcloud auth print-access-token
