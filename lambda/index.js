exports.handler = async (event) => {
  console.log("Lambda triggered from CodePipeline.");
  return { statusCode: 200, body: "Success" };
};
