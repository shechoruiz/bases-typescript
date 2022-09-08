(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = () => {
    return "Batiselan activada";
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();
})();
