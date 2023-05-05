//jshint esversion:6

// module.exports.getDate = function() {
exports.getDate = function() {
  const today = new Date();
  const options = {weekday:"long", month:"long", day:"numeric"};
  
  return day = today.toLocaleDateString("en-US", options);
}

// module.exports.getDay = function() {
exports.getDay = function() {
  const today = new Date();
  const options = {weekday:"long"};
  
  return today.toLocaleDateString("en-US", options);
}

