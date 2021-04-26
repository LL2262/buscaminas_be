export const validate = (errors) => {
    let errorsMsg: string = '';
    errors.forEach(
        e => {
            var keys = Object.keys(e.constraints);
            keys.forEach(k => {
                if (e.constraints[k]) {
                    errorsMsg += e.constraints[k] + ". ";
                }
            });
        });
    return errorsMsg
}


