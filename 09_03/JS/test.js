math.add1 = function(number) {
    let answer = number + 1;
    return answer;
};

math.average = function(a, b, c, d) {
    let answer = (a + b + c + d) / 4;
    return answer;
};
math.tip = function(total) {
    let answer = total * 0.2;
    return answer;
};

math.owner = "Saida";

math.greeting = function(name) {
    var response = "Hello " + name + " How is your day";
    return response;
};

var list = [
    {
        Name: "Saida",
        Birthday: "02/08/1990"
    },
    {
        Name: "Joey",
        Birthday: "08/08/1988"
    },
    {
        Name: "Tyrone",
        Birthday: "03/20/1988"
    }
];

for (i = 0; i < list.length; i++) {
    list[i] + "<br>";
    console.log(list[i] + "<br>");
}
