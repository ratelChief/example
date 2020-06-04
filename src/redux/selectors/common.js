export const getReducerData = (state, name) => {
  const reducer = state[name];

  return reducer.list.map((id) => reducer.hash[id]);
};
