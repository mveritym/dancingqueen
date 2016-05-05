export default {
  login: function* login() {
    console.log('LOGGING IN!');
    yield fetch('http://localhost:3000/login');
  },
};
