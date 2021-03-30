const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM hobbies', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data for hobbies')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM hobbies WHERE id=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving this hobbies data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', (req, res) => {
  const { title, gif } = req.body
  connection.query(
    'INSERT INTO hobbies(title,gif) VALUES(?,?)',
    [title, gif],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving hobbies')
      }
      connection.query(
        'SELECT * FROM hobbies WHERE id=?',
        result.insertId,
        (err2, res2) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql
            })
          }
          const insertedHobbies = res2[0]
          const { ...hobbies } = insertedHobbies
          const host = req.get('host')
          const location = `http://${host}${req.url}/${hobbies.id}`
          return res.status(201).set('Location', location).json(hobbies)
        }
      )
    }
  )
})
router.delete('/:id', (req, res) => {
  const idHobbies = req.params.id

  connection.query('DELETE FROM hobbies WHERE id=?', [idHobbies], err => {
    if (err) {
      res.status(500).send('Error deleting this hobbie')
    } else {
      res.status(200).send('Hobbie deleted ! ')
    }
  })
})
router.put('/:id', (req, res) => {
  const idHobbies = req.params.id
  const newHobbies = req.body

  connection.query(
    'UPDATE hobbies SET ? WHERE id=?',
    [newHobbies, idHobbies],
    err => {
      if (err) {
        res.status(500).send('Error updating this hobbie')
      } else {
        res.status(200).send('Hobbie updated successfully')
      }
    }
  )
})
module.exports = router
