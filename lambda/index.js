const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline();

exports.handler = async (event) => {
  const jobId = event["CodePipeline.job"]?.id;
  if (jobId) {
    await codepipeline.putJobSuccessResult({ jobId }).promise();
  }
  console.log("✅ Lambda invoked via CodePipeline.");
  return;
};
