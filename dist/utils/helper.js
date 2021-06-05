"use strict";
module.exports = {
    format_time: (date) => {
        console.log(date);
        let newDate = date.toLocaleDateString();
        console.log(newDate);
        return newDate;
    }
};
