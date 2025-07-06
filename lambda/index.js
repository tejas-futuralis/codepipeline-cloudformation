exports.handler = async (event) => {
  console.log("Hello World!!! Lambda triggered from CodePipeline.");

  return {
    status: "Success"
  };
};
