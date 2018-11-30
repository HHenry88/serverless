"use strict";

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Handler for hello function",
      input: event
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getDate = async (event, context) => {
  const newDate = new Date();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: newDate,
      input: event
    })
  };
};
