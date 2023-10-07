import Image from 'next/legacy/image';
import { urlForImage } from '@cmsclient/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface ISanityImageProps {
  asset: SanityImageSource;
  alt: string;
}

interface IProps {
  node: ISanityImageProps;
  className?: string;
}

const ImageSerializer = ({
  node: { asset, alt },
  className,
}: IProps): JSX.Element => {
  return (
    <Image
      src={typeof asset === 'string' ? asset : urlForImage(asset)}
      alt={alt}
      width={1920}
      height={1080}
      className={className}
    />
  );
};

export default ImageSerializer;
