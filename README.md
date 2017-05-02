# ET Driving School Web

### Introduction

**etdivingschool-web** is a react based website for promoting ET Driving School

# Installation
Clone the repository
```bash
git clone https://github.com/codeaim/etdrivingschool-web.git
```

Navigate into the project directory
```bash
cd etdrivingschool-web
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
aws s3 cp . s3://etdrivingschool-web
```

Create AWS S3 bucket
```bash
aws s3api create-bucket --bucket etdrivingschool-web --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1
```

Copy production directory to S3 bucket
```bash
aws s3 cp . s3://etdrivingschool-web --recursive --acl public-read
```

Configure bucket as static website
```bash
aws s3 website s3://etdrivingschool-web --index-document index.html
```






