export const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
) => {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args); // args 타입이 func와 동일하게 추론됩니다
    }, delay);
  };
};

export const throttle = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
) => {
  let lastTime = 0;
  return (...args: T) => {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      func(...args);
    }
  };
};

export const overlapHandler = <T>(array: T[]): T[] => {
  return array.filter((value, idx, arr) => {
    return (
      arr.findIndex(
        (item) => JSON.stringify(item) === JSON.stringify(value)
      ) === idx
    );
  });
};
