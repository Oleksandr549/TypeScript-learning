type ColorRGB = [
  red: number,
  green: number,
  blue: number,
]; 

function getRandomColor(): ColorRGB {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return [red, green, blue];
}
const SomeColor = getRandomColor();
console.log(SomeColor);