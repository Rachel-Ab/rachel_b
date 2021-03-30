const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM homepage', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data for homepage')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM homepage WHERE id=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving this homepage data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', (req, res) => {
  const { pseudo, points } = req.body
  connection.query(
    'INSERT INTO homepage(pseudo, points) VALUES(?,?)',
    [pseudo, points],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving homepage')
      }
      connection.query(
        'SELECT * FROM homepage WHERE id=?',
        result.insertId,
        (err2, res2) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql
            })
          }
          const insertedHomepage = res2[0]
          const { ...homepage } = insertedHomepage
          const host = req.get('host')
          const location = `http://${host}${req.url}/${homepage.id}`
          return res.status(201).set('Location', location).json(homepage)
        }
      )
    }
  )
})
router.delete('/:id', (req, res) => {
  const idHomepage = req.params.id

  connection.query('DELETE FROM homepage WHERE id=?', [idHomepage], err => {
    if (err) {
      res.status(500).send('Error deleting this homepage')
    } else {
      res.status(200).send('Homepage deleted ! ')
    }
  })
})
router.put('/:id', (req, res) => {
  const idHomepage = req.params.id
  const newHomepage = req.body

  connection.query(
    'UPDATE homepage SET ? WHERE id=?',
    [newHomepage, idHomepage],
    err => {
      if (err) {
        res.status(500).send('Error updating this homepage')
      } else {
        res.status(200).send('Homepage updated successfully')
      }
    }
  )
})
module.exports = router
