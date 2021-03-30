const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM contact', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data for contact')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM contact WHERE id=?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving this contact data')
      } else {
        res.status(200).json(results)
      }
    }
  )
})
router.post('/', (req, res) => {
  const { title, link } = req.body
  connection.query(
    'INSERT INTO contact(title,link) VALUES(?,?)',
    [title, link],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving contact')
      }
      connection.query(
        'SELECT * FROM contact WHERE id=?',
        result.insertId,
        (err2, res2) => {
          if (err2) {
            return res.status(500).json({
              error: err2.message,
              sql: err2.sql
            })
          }
          const insertedContact = res2[0]
          const { ...contact } = insertedContact
          const host = req.get('host')
          const location = `http://${host}${req.url}/${contact.id}`
          return res.status(201).set('Location', location).json(contact)
        }
      )
    }
  )
})
router.delete('/:id', (req, res) => {
  const idContact = req.params.id

  connection.query('DELETE FROM contact WHERE id=?', [idContact], err => {
    if (err) {
      res.status(500).send('Error deleting this contact')
    } else {
      res.status(200).send('Contact deleted ! ')
    }
  })
})
router.put('/:id', (req, res) => {
  const idContact = req.params.id
  const newContact = req.body

  connection.query(
    'UPDATE contact SET ? WHERE id=?',
    [newContact, idContact],
    err => {
      if (err) {
        res.status(500).send('Error updating this contact')
      } else {
        res.status(200).send('Contact updated successfully')
      }
    }
  )
})
module.exports = router
