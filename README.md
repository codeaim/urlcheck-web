# Urlcheck Web

### Introduction

**urlcheck-web** is a react based website for using & promoting urlcheck

# Installation
Clone the repository
```bash
git clone https://github.com/codeaim/urlcheck-web.git
```

Navigate into the project directory
```bash
cd urlcheck-web
```

Install dependenices
```bash
npm install
```

Build project to produce an optimized production version
```bash
npm run build
```

Navigate into the production directory
```bash
cd build
```

Create AWS S3 bucket
```bash
aws s3api create-bucket --bucket urlcheck-web --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1
```

Copy production directory to S3 bucket
```bash
aws s3 cp . s3://urlcheck-web --recursive --acl public-read
```

Configure bucket as static website
```bash
aws s3 website s3://urlcheck-web --index-document index.html
```






