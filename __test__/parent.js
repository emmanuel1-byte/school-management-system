const app = require('../app')
const request = require('supertest')
require('dotenv').config()

describe('List parent', () => {
    it('should retrieve all parent', (done) => {
        return request(app)
            .get('/api/parents/list-parent')
            .set('Authorization', `${process.env.ACCESS_TOKEN}`)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                done()
            })
    })
})

describe('Search parent', () => {
    it('should retrieve parent that matches the search query and filter', (done) => {
        const name = 'Allan'
        const religion = 1
        return request(app)
            .get(`/api/parents/search?name${name}&religion${religion}`)
            .set('Authorization', `${process.env.ACCESS_TOKEN}`)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                done()
            })
    })
})


describe('Get a parent', () => {
    it('should retrieve a parent', (done) => {
        const parentId = 1
        return request(app)
            .get(`/api/parents/${parentId}`)
            .set('Authorization', `${process.env.ACCESS_TOKEN}`)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                done()
            })
    })
})
