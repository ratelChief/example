export const transformToHash = (data) =>
  data.reduce(
    (res, cur) => ({
      ...res,
      [cur.id]: cur,
    }),
    {},
  );

export const transformToList = (data) => data.map((item) => item.id);
