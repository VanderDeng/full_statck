// TwoSum -
// 在一个升序,无重复数的数组中，给定一个目标值，找出哪两个数的和为这个目 标值(任意一个组合)，并返回这两个数的序号(index) 要求:写一个function， 输入为一组二维数组（inner array长度为2）。
// 要求结果去重。

// 比如:
// Array = [1,3,4,6,7,8,10,14,15] Target = 14
// [[2,6]，[3,5]]

//input a arr and a target number
var arr = [1, 3, 4, 6, 7, 8, 10, 14, 15];
var target = 14;
var arrResult1 = [];
var arrResult2 = [];
var arrResult3 = [];

//get a number from the arr as a targetA, let ever each number plus targetA, if sum == target, then output save the other as targetB
function getNum(arr, target) {
	for (var i = 0; i <= arr.length / 2; i++) {
		for (var j = 0; j <= arr.length; j++) {
			if (arr[i] + arr[j] === target && i !== j) {
				arrResult1.push([i, j]);
			}
		}
	}
	return arrResult1;
}

console.log(getNum(arr, target));

//indexof targetA and targetB and output the index

function twoSum2(arr, target) {
	var left = 0;
	var right = arr.length - 1;
	while (left < right) {
		var sum = arr[left] + arr[right];
		if (sum === target) {
			arrResult2.push([left, right]);
		}
		if (sum > target) {
			right--;
		} else {
			left++;
		}
	}
	return arrResult2;
}
console.log(twoSum2(arr, target));

function twoSum3() {
	var diff = {};
	for (var i = 0; i < arr.length; i++) {
		var currentNumber = arr[i];
		if (diff[currentNumber]) {
			arrResult3.push([diff[currentNumber], i]);
		}
		var diffs = target - currentNumber;
		diff[diffs] = i;
	}
	return arrResult3;
}
console.log(twoSum3(arr, target));
