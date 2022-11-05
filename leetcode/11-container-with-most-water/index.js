module.exports = function (height) {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const water = (r - l) * Math.min(height[l], height[r]);
    if (water > max) {
      max = water;
    }

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};
