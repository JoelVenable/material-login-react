import dotenv from "dotenv";

dotenv.config();

const vars = {
  s3: {
    REGION: process.env.REACT_APP_S3_BUCKET_REGION,
    BUCKET: process.env.REACT_APP_S3_BUCKET_NAME
  },
  apiGateway: {
    REGION: process.env.REACT_APP_API_GATEWAY_REGION,
    URL: process.env.REACT_APP_API_GATEWAY_URL
  },
  cognito: {
    REGION: process.env.REACT_APP_COGNITO_REGION,
    USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID
  }
};

export const awsConfigure = {
  Auth: {
    mandatorySignIn: true,
    region: vars.cognito.REGION,
    userPoolId: vars.cognito.USER_POOL_ID,
    identityPoolId: vars.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: vars.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: vars.s3.REGION,
    bucket: vars.s3.BUCKET,
    identityPoolId: vars.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: vars.apiGateway.API_GATEWAY_URL,
        region: vars.apiGateway.REGION
      }
    ]
  }
};
