const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline();

exports.handler = async (event) => {
  const jobId = event['CodePipeline.job']?.id;
  if (!jobId) {
    console.log('Not triggered by CodePipeline job, exiting...');
    return;
  }

  // IMPORTANT: send success signal back to CodePipeline
  await codepipeline.putJobSuccessResult({ jobId }).promise();

  console.log('✅ CodePipeline job completed.');
};
