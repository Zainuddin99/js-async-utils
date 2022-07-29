//All utilities
export const promiseWrapper = (fn: () => any) => {
  return (...args: any[]) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await fn(...(args as []));
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
};
