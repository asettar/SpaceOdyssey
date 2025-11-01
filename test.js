var matrixSumQueries = function(n, queries) {
    let sum = 0, cols = 0, rows = 0;
    let checked = Array(n).fill(0).map(_ => [0, 0]);
    queries.reverse();
    for (let [type, index, value] of queries) {
        if (checked[index][type] == 1) continue;
        if (type) {
            sum += value * (n - rows);
            cols++;
        }
        else {
            sum += value * (n - cols);
            rows++;
        }
        checked[index][type] = 1;
    }
    return sum;
};


console.log(matrixSumQueries(3, [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,1]]));
