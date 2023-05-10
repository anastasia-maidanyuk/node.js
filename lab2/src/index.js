var add = function (n) {
    var addNext = function (next) {
        if (next === undefined) {
            return n || 0;
        }
        return add((n || 0) + next);
    };
    return addNext;
};
//@ts-ignore
console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37
