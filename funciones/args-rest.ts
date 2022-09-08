(() => {
  const fullName = (firstname: string, ...restArgs: string[]): string => {
    return `${firstname} ${restArgs.join(" ")}`;
  };

  const superman = fullName("Clark", "Joseph", "Kent");
  console.log({ superman });
})();
