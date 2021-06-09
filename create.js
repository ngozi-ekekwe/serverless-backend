const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

const client = AWS.DynamoDB.DocumentClient();
module.exports.run  = async(event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "todos",
    item: {
      id: uuid(),
      text: data.text,
      checked: false
    }
  }
  await client.put(params).promise()
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}