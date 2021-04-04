export const divideForecastsByDate = (forecasts, datePropName) => {
  return forecasts.reduce((accum, current) => {
    const date = new Date(current[datePropName]).toLocaleDateString();
    if(accum[date]) {
      accum[date].push(current);
    } else {
      accum[date] = [current];
    }
    return accum;
  }, {});
};