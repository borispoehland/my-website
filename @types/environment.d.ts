declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORTFOLIO_SCREENSHOT_WIDTH: string;
      PORTFOLIO_SCREENSHOT_HEIGHT: string;
      SENDGRID_API_KEY: string;
      SENDGRID_TEMPLATE_ID: string;
      MY_EMAIL: string;
      MY_REDIRECT_EMAIL: string;
      DOMAIN: string;
    }
  }
}

export {};
