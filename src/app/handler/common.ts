export const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
) => {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// debounce 함수

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

// 쓰로틀 함수

export const overlapHandler = <T>(array: T[]): T[] => {
  return array.filter((value, idx, arr) => {
    return (
      arr.findIndex(
        (item) => JSON.stringify(item) === JSON.stringify(value)
      ) === idx
    );
  });
};

// 중복 필터 함수
