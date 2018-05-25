
function lookupUnsafe(key, obj) {
    return obj[key];
}

export function keySwitch(key, caseObj) {
    return (...args) => {
        const match = args[args.length - 1];
        const c = lookupUnsafe(lookupUnsafe(key, match), caseObj);
        c(match);
    }

}

export function mathcAction() {

}