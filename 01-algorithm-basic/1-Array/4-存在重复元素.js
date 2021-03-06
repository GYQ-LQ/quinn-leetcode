/* 给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

 

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 使用Set
var containsDuplicate2 = function (nums) {
  const s = new Set();
  for (const val of nums) {
    if (s.has(val)) return true;
    s.add(val);
  }
  return false;
};
// 排序
var containsDuplicate1 = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
// indexOf
var containsDuplicate = function (nums) {
  let len = nums.length;
  while (len--) {
    if (nums.indexOf(nums[len]) !== len) return true;
  }
  return false;
};

let f = containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(f);
