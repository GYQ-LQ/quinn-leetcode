/* 给出一个区间的集合，请合并所有重叠的区间。

 

示例 1:

输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。

 

提示：

intervals[i][0] <= intervals[i][1]
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
  if (arr.length < 2)
    return arr;
  arr.sort((a, b) => a[0] - b[0]);
  let res = [];
  res.push(arr.reduce(function (pre, cur, index, arr) {
    if (pre[1] >= cur[0]) {
      if (pre[1] < cur[1])
        pre[1] = cur[1];
      return pre;
    } else {
      res.push(pre);
      return cur;
    }
  }))
  return res;
};
