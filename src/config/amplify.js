export default {
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_AWS_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_APP_CLIENT_ID
  },
  Storage: {
    region: process.env.REACT_APP_AWS_S3_REGION,
    bucket: process.env.REACT_APP_AWS_S3_BUCKET,
    identityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: 'notes',
        endpoint: process.env.REACT_APP_AWS_API_GATEWAY_URL,
        region: process.env.REACT_APP_AWS_API_GATEWAY_REGION
      }
    ]
  }
};
