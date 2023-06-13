function pairElement(str) {
  const base_pairs = str.split("");
  
//   Solution using for loop
  for (const base in base_pairs) {
    switch (base_pairs[base]) {
      case 'A':
        base_pairs[base] = ['A', 'T'];
        break;
      case 'T':
        base_pairs[base] = ['T', 'A'];
        break;
      case 'C':
        base_pairs[base] = ['C', 'G'];
        break;
      case 'G':
        base_pairs[base] = ['G', 'C'];
        break;
    }
  }
  
  return base_pairs;
}

pairElement("GCG");
