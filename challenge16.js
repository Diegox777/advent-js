function fixLetter(letter) {
  letter = letter.trim();
  
  letter = letter.replace(/,/g, ' , ');
  letter = letter.replace(/\./g, ' . ');
  
  letter = letter.replace(/\s+/g, ' ');

  letter = letter.replace(/\s,/g, ',');
  letter = letter.replace(/\s\./g, '.');
  
  letter = letter.replace(/\?+/g, '?');  

  letter = letter.replace(/santa claus/ig, 'Santa Claus');

  letter = letter.replace(/\w$/, c => c + '.');
  // TODO
  // letter = letter.replace(/(\.|\?|!) \w/g, w => w.replace(/[a-zA-Z]/, c => c.toUpperCase()));

  letter = letter.replace(/[a-zA-Z]/, c => c.toUpperCase());
  return letter;
}
