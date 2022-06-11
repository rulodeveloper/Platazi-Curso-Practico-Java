const lista1 = [
    4,
    4,
    5,
    3,
    7,
    2,
    3,
    1,
    4,
    4,
]

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
        
        
    }
);
