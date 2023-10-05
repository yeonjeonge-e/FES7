module.exports = function myLoader(item) {
  // item은 전달될 때 문자열로 전달됨
  console.log('hello myLoader!');
  return item.replace('console.log(', 'alert(');
}