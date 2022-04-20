const request = require('supertest')
const app = require('../index')

describe('Route Test', () => {
  
  // GET /users
  describe('GET /users', () => {
    it('test users GET route', async () => {
      const res = await request(app)
        .get('/users')
        .auth('admin', '1234')
     
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('data')
    })
  })

  // POST /users
  describe('POST /users', () => {
    it('test users POST route', async () => {
      const res = await request(app)
        .post('/users')
        .auth('admin', '1234')
      
      expect(res.statusCode).toEqual(200)
    
    })
  })

  //  PUT /users
  describe('PUT /users:id', () => {
    it('test users PUT route', async () => {
      const res = await request(app)
        .put('/users/1')
        .auth('admin', '1234')
      
      expect(res.statusCode).toEqual(200)
    })
  })

  // BULK DELETE /users
  describe('BULK DELETE /users/delete', () => {
    it('test users DELETE route', async () => {
      const res = await request(app)
        .delete('/users/delete')
        .send([])
        .auth('admin', '1234')
      
      expect(res.statusCode).toEqual(200)
      expect(res.body.message).toBe('users deleted')
    })
  })


  // DELETE /users
  describe('DELETE /users:id', () => {
    it('test users DELETE route', async () => {
      const res = await request(app)
        .delete('/users/1')
        .auth('admin', '1234')
      
      expect(res.statusCode).toEqual(200)
    })
  })

})