declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORTFOLIO_SCREENSHOT_WIDTH: string;
      PORTFOLIO_SCREENSHOT_HEIGHT: string;
      SENDGRID_API_KEY: string;
      SENDGRID_TEMPLATE_ID: string;
      NEXT_PUBLIC_MY_EMAIL: string; // see https://nextjs.org/docs/basic-features/environment-variables
      MY_REDIRECT_EMAIL: string;
    }
  }
}

export {};
