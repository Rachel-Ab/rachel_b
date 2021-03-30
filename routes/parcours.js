const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM parcours', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data for parcours')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM parcours WHERE id=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving this parcours data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', (req, res) => {
  const { date, text } = req.body
  connection.query(
    'INSERT INTO parcours(date, text) VALUES(?,?)',
    [date, text],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving parcours')
      }
      connection.query(
        'SELECT * FROM parcours WHERE id=?',
        result.insertId,
        (err2, res2) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql
            })
          }
          const insertedParcours = res2[0]
          const { ...parcours } = insertedParcours
          const host = req.get('host')
          const location = `http://${host}${req.url}/${parcours.id}`
          return res.status(201).set('Location', location).json(parcours)
        }
      )
    }
  )
})
router.delete('/:id', (req, res) => {
  const idParcours = req.params.id

  connection.query('DELETE FROM parcours WHERE id=?', [idParcours], err => {
    if (err) {
      res.status(500).send('Error deleting this parcours')
    } else {
      res.status(200).send('Parcours deleted ! ')
    }
  })
})
router.put('/:id', (req, res) => {
  const idParcours = req.params.id
  const newParcours = req.body

  connection.query(
    'UPDATE parcours SET ? WHERE id=?',
    [newParcours, idParcours],
    err => {
      if (err) {
        res.status(500).send('Error updating this parcours')
      } else {
        res.status(200).send('Parcours updated successfully')
      }
    }
  )
})
module.exports = router
