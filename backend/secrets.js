// secrets.js
const secrets = {
  dbUri:
    "mongodb://purple_project:123456qwerty@ds125912.mlab.com:25912/purple_project"
  // dbUri: process.env.DB_URI
};

export const getSecret = key => secrets[key];

// To use environment variables:
// export DB_URI=mongodb://purple_project:123456qwerty@ds125912.mlab.com:25912/purple_project
