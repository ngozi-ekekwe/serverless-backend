const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.run = async(event) => {
  const params = {
    TableName: 'todos',
    key: {
      id: event.pathParameters.id
    }
  };
  const result = await dynamoDB.get(params).promise();

  if(result.Item) {
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item)

    }
  }else {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Todo item does not exists."
      })
    }
  }
}