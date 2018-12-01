"use strict";

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
