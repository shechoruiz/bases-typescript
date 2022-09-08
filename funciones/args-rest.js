"use strict";
(() => {
    const fullName = (firstname, ...restArgs) => {
        return `${firstname} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
