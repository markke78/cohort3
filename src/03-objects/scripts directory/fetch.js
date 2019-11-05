const functions = {
  getFirstName: data => {
    let i = 0;
    return data[i].name;
  },

  getAllFirstName: data => {
    let firstName = [];
    for (let b of data) {
      firstName.push(b.name);
    }
    return firstName;
  }
};

export default functions;
