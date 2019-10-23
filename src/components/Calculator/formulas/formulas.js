export const calculateMetric = (height, weight) => {
  return ((weight / height / height) * 10000).toFixed(2);
};

export const calculateImperial = (height, weight) => {
  return ((weight * 703) / (height * height)).toFixed(2);
};
