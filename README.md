# nikolaostolis.com

Personal website and professional portfolio for Nikolaos Tolis.

The site is hosted on Firebase Hosting using the Google Cloud project:

    nikolaos-tolis-site

Production domains:

    https://nikolaostolis.com
    https://www.nikolaostolis.com

`www.nikolaostolis.com` redirects to `nikolaostolis.com`.

## Deployment

From the repository root:

    firebase deploy --only hosting --project nikolaos-tolis-site

## Cloud Shell helpers

From the repository root:

    source scripts/cloudshell/site-env
    scripts/cloudshell/site-check-dns
    scripts/cloudshell/site-check-firebase

## DNS

The DNS zone is managed in Cloudflare.

All Firebase Hosting records should remain DNS-only in Cloudflare.

## CI/CD with Cloud Build

A `cloudbuild.yaml` file is included for future Cloud Build deployment.

Current status:

    Cloud Build API is not enabled because the Google Cloud project has no billing account attached.

When billing is enabled later, continue with:

    gcloud services enable cloudbuild.googleapis.com --project nikolaos-tolis-site

Then create a Cloud Build GitHub trigger for:

    Repository: niktolis/nikolaostolis.com
    Branch: ^main$
    Build config: cloudbuild.yaml

Until then, deploy manually with:

    firebase deploy --only hosting --project nikolaos-tolis-site
