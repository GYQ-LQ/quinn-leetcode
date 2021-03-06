/* 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

 

示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2：

输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      if (item === 0) {
        setQuinnZero(matrix, i, j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      matrix[i][j] = parseInt(item)
    }
  }
  console.log(matrix)
};
var setQuinnZero = function (list, x, y) {
  for (let i = 0; i < list.length; i++) {
    const arr = list[i];
    for (let j = 0; j < arr.length; j++) {
      if ((i === x || j === y) && list[i][j] !== 0) {
        list[i][j] = '0'
      }
    }
  }
}
setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
])

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = new Set(),
    cols = new Set();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row);
        cols.add(col);
      }
    }
  }
  //行清零
  for (let row of rows) {
    for (let col = 0; col < matrix[row].length; col++) {
      matrix[row][col] = 0;
    }
  }
  //列清零
  for (let col of cols) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][col] = 0;
    }
  }
  return matrix;
};
