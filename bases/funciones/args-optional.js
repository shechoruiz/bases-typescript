"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "-"}`;
    };
    const name = fullName("tony");
    console.log({ name });
})();
