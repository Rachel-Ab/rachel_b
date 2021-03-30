const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM competences', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data for competences')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM competences WHERE id=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving this competence data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})

router.post('/', (req, res) => {
  const { title, img, rang } = req.body
  connection.query(
    'INSERT INTO competences(title,img,rang) VALUES(?,?,?)',
    [title, img, rang],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving competence')
      }
      connection.query(
        'SELECT * FROM competences WHERE id=?',
        result.insertId,
        (err2, res2) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql
            })
          }
          const insertedCompetence = res2[0]
          const { ...competences } = insertedCompetence
          const host = req.get('host')
          const location = `http://${host}${req.url}/${competences.id}`
          return res.status(201).set('Location', location).json(competences)
        }
      )
    }
  )
})
router.delete('/:id', (req, res) => {
  const idCompetence = req.params.id

  connection.query(
    'DELETE FROM competences WHERE id=?',
    [idCompetence],
    err => {
      if (err) {
        res.status(500).send('Error deleting this competence')
      } else {
        res.status(200).send('Competence deleted ! ')
      }
    }
  )
})
router.put('/:id', (req, res) => {
  const idCompetence = req.params.id
  const newCompetence = req.body

  connection.query(
    'UPDATE competences SET ? WHERE id=?',
    [newCompetence, idCompetence],
    err => {
      if (err) {
        res.status(500).send('Error updating this competence')
      } else {
        res.status(200).send('Competence updated successfully')
      }
    }
  )
})
module.exports = router
