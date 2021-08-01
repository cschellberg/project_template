rem npm run build
echo Uploading to %1%
aws s3 cp build s3://%1% --recursive