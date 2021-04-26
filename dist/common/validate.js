"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (errors) => {
    let errorsMsg = '';
    errors.forEach(e => {
        var keys = Object.keys(e.constraints);
        keys.forEach(k => {
            if (e.constraints[k]) {
                errorsMsg += e.constraints[k] + ". ";
            }
        });
    });
    return errorsMsg;
};
exports.validate = validate;
