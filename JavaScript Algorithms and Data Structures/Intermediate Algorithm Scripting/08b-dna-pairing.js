function pairElement(str) {
  // Solution using map
  const base_pairs = str.split("").map(base => {
    switch (base) {
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
      case 'C':
        return['C', 'G'];
      case 'G':
        return ['G', 'C'];
    }
  });
    
  return base_pairs;
}

pairElement("GCG");
