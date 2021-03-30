const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM credits', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data for crédits')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM credits WHERE id=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving this crédits data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', (req, res) => {
  const { text } = req.body
  connection.query(
    'INSERT INTO credits(text) VALUES(?)',
    [text],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving credits')
      }
      connection.query(
        'SELECT * FROM credits WHERE id=?',
        result.insertId,
        (err2, res2) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql
            })
          }
          const insertedCredits = res2[0]
          const { ...credits } = insertedCredits
          const host = req.get('host')
          const location = `http://${host}${req.url}/${credits.id}`
          return res.status(201).set('Location', location).json(credits)
        }
      )
    }
  )
})
router.delete('/:id', (req, res) => {
  const idCredits = req.params.id

  connection.query('DELETE FROM credits WHERE id=?', [idCredits], err => {
    if (err) {
      res.status(500).send('Error deleting this credit')
    } else {
      res.status(200).send('Credit deleted ! ')
    }
  })
})
router.put('/:id', (req, res) => {
  const idCredits = req.params.id
  const newCredits = req.body

  connection.query(
    'UPDATE credits SET ? WHERE id=?',
    [newCredits, idCredits],
    err => {
      if (err) {
        res.status(500).send('Error updating this credit')
      } else {
        res.status(200).send('Credit updated successfully')
      }
    }
  )
})
module.exports = router
