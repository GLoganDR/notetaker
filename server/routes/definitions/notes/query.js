'use strict';

var Joi  = require('joi'),
   Note = require('../../../models/note');

module.exports = {
  description: 'Query Notes',
  tags:['notes'],
  validate: {
    query: {
      limit: Joi.number().required(),
      offset: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Note.query(request.auth.credentials, request.query, function(err, notes){
      reply({notes:notes}).code(err ? 400 : 200);
    });
  }
};
