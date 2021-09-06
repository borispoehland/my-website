import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import { sanityConfig } from './config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: SanityImageSource): string =>
  imageBuilder.image(source).auto('format').fit('max').url() as string;

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);
