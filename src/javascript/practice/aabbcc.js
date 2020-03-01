function encodeRunLength(data) {
  var encode_data = [];
  var c;
  var len = 0;

  for (var i = 0; i < data.length; i++) {
    if (0 < len && c == data.charAt(i)) {
      len++;
      continue;
    }

    if (len != 0) {
      encode_data.push(c);
      encode_data.push(len);
    }

    c = data.charAt(i);
    len = 1;
  }

  if (len != 0) {
    encode_data.push(c);
    encode_data.push(len);
  }

  return encode_data;
}

encodeRunLength("aabbccddeeeeeeeeeeeeee");
