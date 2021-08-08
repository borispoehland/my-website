declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORTFOLIO_SCREENSHOT_WIDTH: string;
      PORTFOLIO_SCREENSHOT_HEIGHT: string;
    }
  }
}

export {};
