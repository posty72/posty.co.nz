export AWS_STAGING_BUCKET=website-dev.posty.co.nz
export AWS_STAGING_DOMAIN=dev.posty.co.nz

aws s3 sync ./public s3://$AWS_STAGING_BUCKET \
    --acl=public-read

npx lighthousebot -- https://$AWS_STAGING_DOMAIN
