var fun = function (user) {
    console.log(user);
};
fun("hi");
fun(10);
var f1 = function (use) {
    console.log("".concat(use.name, " hi ").concat(use.uid));
};
f1({ name: "hi", uid: 12 });
