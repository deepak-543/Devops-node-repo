var assert = require('assert');
const request = require('request');

describe('Weather API', () => {
  it('should return a response of 200 when the API is running', () => {
    const mockRequest = {};
    const mockResponse = {
      status: jest.fn().mockReturnValue({
        send: jest.fn()
      })
    };
    app.get('/', (req, res) => {
      res.status(200).send('Weather API is running');
    });
  }); // This closing brace was missing in your code

  it('should return second character of the string', function () {
    assert.equal("Weather API is Running!".charAt(1), 'e');
  });
});

