const ftoc = function(fvalue) {
  return  Math.round(((fvalue - 32) / 1.8)*10)/10 ;
};

const ctof = function(cvalue) {
  return Math.round((cvalue * 1.8 + 32)*10)/10 ;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
