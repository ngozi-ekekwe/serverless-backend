
// event - object that contains all necessary request data
// context - is an object that contains aws specific values
// callback - a function that is invoked with either an error object as the first parameter
// or a valid response as the second argument

module.exports.run = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Hello world endpoint'})
  }
};