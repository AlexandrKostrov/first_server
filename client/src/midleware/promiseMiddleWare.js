export default ({ dispatch }) => next => async action => {
    if (!action.promise) {
        return next(action);
    }

    const { promise, type, payload, ...rest } = action;

    if (type === "DEPARTMENTS") {
        let result = await promise();
        console.log(result);
        return next({ ...rest, result, type: `${type}_GET` });
    }

    if (type === "EMPLOYEES") {
        let result = await promise(payload);
        console.log(result);
        return next({ ...rest, result, type: `${type}_GET` });
    }
}