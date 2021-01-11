const LoginService = (url) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(true);
    }, 1000);
 });
};

export default LoginService;