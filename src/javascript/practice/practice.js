const functions = {
  theSort: months => {
    months.sort();
    return months;
  },
  compareSort: numbers => {
    numbers.sort(function(a, b) {
      return a - b;
    });
    return numbers;
  },
  mulSort: items => {
    items.sort(function(a, b) {
      return a.value - b.value;
    });
    return items;
  },
  sortByName: items => {
    items.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return items;
  },
  noRepeat: strs => {
    let reg = new RegExp(/.*\/([^\/]+)\/([^\/]+)$/);
    strs.match(reg);
    return strs;
  }
};

export default functions;
