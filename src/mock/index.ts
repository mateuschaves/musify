function mockRequest() {
  const request: any = {}
  request.body = jest.fn().mockReturnValue(request)
  request.params = jest.fn().mockReturnValue(request)
  return request
}

function mockResponse() {
  const response: any = {}
  response.send = jest.fn().mockReturnValue(response)
  response.status = jest.fn().mockReturnValue(response)
  response.json = jest.fn().mockReturnValue(response)
  return response
}

export { mockRequest, mockResponse }
