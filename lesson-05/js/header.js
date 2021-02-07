function main() {
    var d = parseInt(readLine(), 10);
    let days = ["Sunday", "Monday","Tuesday", "Wednessday", "Thrusday", "Friday", "Saturday"];
    var day = 0;
    while (d >= 0) {
        d -= 7;
        day ++;
        if (d > 0) {
            d += 2;
        } else {
            break;
        }
    } console.log(day);
}