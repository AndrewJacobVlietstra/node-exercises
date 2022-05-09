const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

// Gets all user members
router.get('/', (req, res) => res.json(members));

// Gets a single member
router.get('/:id', (req, res) => {
  const existingMember = members.find(member => member.id == req.params.id);
  if (!existingMember) {
    res.status(400).send(`No member with the id of ${req.params.id}`);
  } else {
    res.json(existingMember);
  }
});

// Create a member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ message: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);
});

// Update member
router.put('/:id', (req, res) => {
  const existingMember = members.find(member => member.id == req.params.id);
  if (!existingMember) {
    res.status(400).send(`No member with the id of ${req.params.id}`);
  } else {
    const updatedMember = req.body;

    existingMember.name = updatedMember.name ? req.body.name : existingMember.name;
    existingMember.email = updatedMember.email ? req.body.email : existingMember.email;

    res.json({ message: 'Member updated', member: existingMember });
  }
});

// Delete member
router.delete('/:id', (req, res) => {
  const existingMember = members.find(member => member.id == req.params.id);
  if (!existingMember) {
    res.status(400).send(`No member with the id of ${req.params.id}`);
  } else {
    res.json({
      message: 'Member deleted',
      members: members.filter(member => member.id !== existingMember.id)
    });
  }
});


module.exports = router;