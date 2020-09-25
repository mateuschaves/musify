import { mockRequest, mockResponse } from '../src/mock'

import { SignInController } from '../src/app/controllers'

describe('SignInController', () => {
  it('should be able to auth', async () => {
    let request = mockRequest()
    request.body = {
      email: 'mateus@gmail.com.br',
      password: '12345678'
    }
    const response = mockResponse()

    await SignInController.store(request, response)

    expect(response.json).toHaveBeenCalledTimes(1)
    expect(response.json.mock.calls.length).toBe(1)
    expect(response.status).toHaveBeenCalledWith(200)
  })

  it('should not be able to auth with invalid body', async () => {
    let request = mockRequest()
    request.body = {
      email: 'mateus@gmail.com.br',
      password: '12345678'
    }
    const response = mockResponse()

    await SignInController.store(request, response)

    expect(response.status).toHaveBeenCalledWith(400)
  })
})
