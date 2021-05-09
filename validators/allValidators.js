"use strict";

const VALIDATION_OPTIONS = {
    abortEarly: false,
    stripUnknown: true,
    errors: {
        escapeHTML: true,
    }
};

//all validator files here
const {postUsersSchema} = require("./postUsersValidator");
const {postLoginSchema} = require("./postLoginValidator");
const {postMealSchema} = require("./postMealValidator");
const {postTDEESchema} = require("./postTDEEValidator");
const {postContentSchema} = require("./postContentValidator");
const {postPostSchema} = require("./newPostValidator");
const {postCommentSchema} = require("./postCommentValidator");
const {getClients} = require("./getClientsValidator"); // used for both active and all clients
const {getTrainers} = require("./getTrainerValidator");
const {addClients} = require("./addClientsValidator");
const {addTrainers} = require("./addTrainersValidator");
const {deleteClients} = require("./deleteClientsValidator");
const {deleteTrainers} = require("./deleteTrainersValidator");
const {updateClients} = require("./updateClientsValidator");
const {updateTrainers} = require("./updateTrainerValidator");

const schemas = {
    postUsersSchema,
    postLoginSchema,
    postMealSchema,
    postTDEESchema,
    postContentSchema,
    postPostSchema,
    postCommentSchema,
    getClients,
    getTrainers,
    addClients,
    addTrainers,
    deleteClients,
    deleteTrainers,
    updateClients,
    updateTrainers
}

exports.schemas = schemas;
exports.VALIDATION_OPTIONS = VALIDATION_OPTIONS; 