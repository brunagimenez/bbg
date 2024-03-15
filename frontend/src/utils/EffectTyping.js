export const effectTyping = (phrase, setText) => {
    let i = 0;

    const intervalId = setInterval(() => {
      setText(phrase.slice(0, i));
      i++;

      if (i > phrase.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
}