export const numberEnvWithFallback = (
  envVariable: string,
  fallback: number
): number => {
  const asNumber = Number(envVariable);
  return Object.is(NaN, asNumber) ? fallback : asNumber;
};

export const getPortfolioImageWidth = () => {
  return numberEnvWithFallback(process.env.PORTFOLIO_SCREENSHOT_WIDTH, 1600);
};

export const getPortfolioImageHeight = () => {
  return numberEnvWithFallback(process.env.PORTFOLIO_SCREENSHOT_HEIGHT, 900);
};
