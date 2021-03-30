const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM projet', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data for projet')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM projet WHERE id=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving this projet data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', (req, res) => {
  const { logo, link, text } = req.body
  connection.query(
    'INSERT INTO projet(logo, link, text) VALUES(?,?,?)',
    [logo, link, text],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving projet')
      }
      connection.query(
        'SELECT * FROM projet WHERE id=?',
        result.insertId,
        (err2, res2) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql
            })
          }
          const insertedProjet = res2[0]
          const { ...projet } = insertedProjet
          const host = req.get('host')
          const location = `http://${host}${req.url}/${projet.id}`
          return res.status(201).set('Location', location).json(projet)
        }
      )
    }
  )
})
router.delete('/:id', (req, res) => {
  const idProjet = req.params.id

  connection.query('DELETE FROM projet WHERE id=?', [idProjet], err => {
    if (err) {
      res.status(500).send('Error deleting this projet')
    } else {
      res.status(200).send('Projet deleted ! ')
    }
  })
})
router.put('/:id', (req, res) => {
  const idProjet = req.params.id
  const newProjet = req.body

  connection.query(
    'UPDATE projet SET ? WHERE id=?',
    [newProjet, idProjet],
    err => {
      if (err) {
        res.status(500).send('Error updating this projet')
      } else {
        res.status(200).send('Projet updated successfully')
      }
    }
  )
})
module.exports = router
