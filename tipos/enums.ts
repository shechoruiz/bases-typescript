(() => {
  // Enums: Las enumeraciones permiten a un desarrollador definir un conjunto de constantes con nombre. El uso de enumeraciones puede facilitar la documentación de la intención o crear un conjunto de casos distintos.

  enum AudioLevel {
    min,
    medium,
    max
  }

  let currentaudio = AudioLevel.max
  console.log(currentaudio);
  console.log(AudioLevel);
  

})()