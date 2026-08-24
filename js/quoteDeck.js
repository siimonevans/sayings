"use strict";

// Round-robin per author rather than "most quotes left first" - the latter
// lets the two heaviest authors dominate the start of every cycle
function createQuoteDeck(quotes) {
  let order = [];
  let lastAuthor = null;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function buildOrder() {
    const buckets = new Map();
    quotes.forEach((quote, index) => {
      if (!buckets.has(quote.author)) {
        buckets.set(quote.author, []);
      }
      buckets.get(quote.author).push(index);
    });
    buckets.forEach((bucket) => shuffle(bucket));

    const result = [];
    let remainingAuthors = shuffle([...buckets.keys()]);

    while (remainingAuthors.length > 0) {
      // Avoid a repeat landing right across the seam between two laps
      if (
        result.length > 0 &&
        quotes[result[result.length - 1]].author === remainingAuthors[0] &&
        remainingAuthors.length > 1
      ) {
        [remainingAuthors[0], remainingAuthors[1]] = [
          remainingAuthors[1],
          remainingAuthors[0],
        ];
      }

      for (const author of remainingAuthors) {
        result.push(buckets.get(author).shift());
      }

      remainingAuthors = shuffle(
        remainingAuthors.filter((author) => buckets.get(author).length > 0)
      );
    }

    // Seam check against the last quote from before this reshuffle
    // Candidate's next neighbour must differ too, else the swap just shifts the repeat along
    if (
      lastAuthor !== null &&
      quotes[result[0]].author === lastAuthor
    ) {
      const swapIndex = result.findIndex(
        (index, i) =>
          quotes[index].author !== lastAuthor &&
          (i === result.length - 1 || quotes[result[i + 1]].author !== lastAuthor)
      );
      if (swapIndex > 0) {
        [result[0], result[swapIndex]] = [result[swapIndex], result[0]];
      }
    }

    return result;
  }

  return {
    next() {
      if (order.length === 0) {
        order = buildOrder();
      }
      const index = order.shift();
      lastAuthor = quotes[index].author;
      return quotes[index];
    },
    // Lets the caller prime the seam check for a quote shown without next(),
    // e.g. one loaded directly from a shared link
    setLastAuthor(author) {
      lastAuthor = author;
    },
  };
}
