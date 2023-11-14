// callback and asynchronous
function message() {
    console.log("Asynchronous is easy");
}
// function tetep bisa dipanggil walaupun panggil diatas
message()

//Synchronous
console.log("start")
for (let i = 1; i <= 100000; i++) {
    console.log(i);
}
console.log("finish")

//Asycnhronous
console.log("start");
setTimeout(() => {
    console.log(" 5 seconds finished")
} , 5000)

console.log("finish") //console.log dieksekusi ketika task sebelumnya selesai

