const {response} = require('express');

const usersGet = (req, res = response) => {
  res.json({
    msg: 'GET API - controller'
  });
}

const usersPost = (req, res = response) => {
  res.json({
    msg: 'POST API - controller'
  });
}

const usersPut = (req, res = response) => {
  res.json({
    msg: 'PUT API - controller'
  });
}

const usersPatch = (req, res = response) => {
  res.json({
    msg: 'PATCH API - controller'
  });
}

const usersDelete = (req, res = response) => {
  res.json({
    msg: 'DELETE API - controller'
  });
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete
}