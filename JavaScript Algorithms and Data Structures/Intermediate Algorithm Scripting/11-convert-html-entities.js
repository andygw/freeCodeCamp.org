function convertHTML(str) {
  // Object for storing HTML entities
  const html_entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  const split = str.split("")
    .map(letter => {
      // Check if the current letter is one that needs replacing
      const replaced_char = Object.keys(html_entities).includes(letter)
      return replaced_char ? html_entities[letter] : letter
    })

  return split.join("");
}

convertHTML("Dolce & Gabbana");
