import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
  url,
  helpers,
} from "@vuelidate/validators";

export const validations = {
  nameAndSurname: {
    required: helpers.withMessage(
      "Name and Surname is required field!",
      required,
    ),
    minLength: helpers.withMessage(
      "Name and Surname must be at least 4 symbols!",
      minLength(4),
    ),
    maxLength: helpers.withMessage(
      "Name and Surname must be at least 4 symbols!",
      maxLength(30),
    ),
    $autoDirty: true,
  },
  contact: {
    required: helpers.withMessage(
      "Telephone number is required field!",
      required,
    ),
    numeric: helpers.withMessage(
      "Telephone number must contain only numerics!",
      numeric,
    ),
    $autoDirty: true,
  },
  emailRule: {
    required: helpers.withMessage("Email is required field!", required),
    email: helpers.withMessage("Follow email structure!", email),
    $autoDirty: true,
  },
  linkedin: {
    required: helpers.withMessage("Linkedin is required field!", required),
    url: helpers.withMessage("Follow link structure!", url),
    $autoDirty: true,
  },
  aboutme: {
    required: helpers.withMessage("About is required field!", required),
    $autoDirty: true,
  },
  experience: {
    required: helpers.withMessage("Experience is required field!", required),
    $autoDirty: true,
  },
  education: {
    required: helpers.withMessage("Education is required field!", required),
    $autoDirty: true,
  },
  skills: {
    arrayNotEmpty: helpers.withMessage(
      "Skills is required field!",
      (value) => value.length > 0,
    ),
  },
  languages: {
    arrayNotEmpty: helpers.withMessage(
      "Languages is required field!",
      (value) => value.length > 0,
    ),
  },
  references: {
    arrayNotEmpty: helpers.withMessage(
      "References is required field!",
      (value) => value.length > 0,
    ),
  },
};
