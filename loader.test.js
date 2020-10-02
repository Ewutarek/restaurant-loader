const load = require('./loader')

describe('SQLite3', () => {
    test('restaurants are loaded into the database', (done) => {
        load((db) => {
            db.all('SELECT * FROM restaurants LIMIT 3;', (err, rows) => {
                expect(rows.length).toBe(3)
                expect(rows[0].name).toBe('reup princess')
                db.get('SELECT COUNT(id) AS total FROM restaurants;', (err, count) => {
                    expect(count.total).toBe(12)
                    done()
                })
            })
        })
    })
})

