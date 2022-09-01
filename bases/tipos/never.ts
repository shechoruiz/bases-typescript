(() => {
  // Cuando se especifica un tipo never, indica al sistema que un elemento no puede tener un punto final alcanzable. Es decir, no debe terminar exitosamente (Va a terminar con un error)
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  error("auxilio");
})();
