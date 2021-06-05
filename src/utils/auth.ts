const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      console.log('Not logged in, redirecting to Login')
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;