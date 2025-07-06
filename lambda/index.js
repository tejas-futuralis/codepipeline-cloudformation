exports.handler = async (event) => {
  console.log("Hello World!!! Lambda triggered from CodePipeline.");
  return { statusCode: 200, body: "Success" };
};
