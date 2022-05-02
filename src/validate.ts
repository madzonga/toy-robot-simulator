const joi = require("joi");

export const placementValidation = joi.object({
    x: joi.number().min(0).max(5).required(),
    y: joi.number().min(0).max(5).required(),
    direction: joi
        .string()
        .valid("NORTH", "SOUTH", "WEST", "EAST")
        .required(),
});
