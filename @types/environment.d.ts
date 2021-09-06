declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORTFOLIO_SCREENSHOT_WIDTH: string;
      PORTFOLIO_SCREENSHOT_HEIGHT: string;
      SENDGRID_API_KEY: string;
      SENDGRID_TEMPLATE_ID: string;
      NEXT_PUBLIC_MY_EMAIL: string; // see https://nextjs.org/docs/basic-features/environment-variables
      MY_REDIRECT_EMAIL: string;
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NEXT_PUBLIC_SANITY_DATASET: string;
      SANITY_API_TOKEN: string;
      SANITY_STUDIO_PREVIEW_SECRET: string;
      SANITY_STUDIO_PREVIEW_URL: string;
      SANITY_STUDIO_API_PROJECT_ID: string;
      SANITY_STUDIO_API_DATASET: string;
    }
  }
}

export {};
