import Image from 'next/image';
import { urlForImage } from '@cmsclient/sanity';

interface IProps {}

const ImageSerializer = ({ node: { asset } }: any): JSX.Element => {
  return (
    <Image
      src={urlForImage(asset).height(1080).width(1920).url() as string}
      alt=""
      width={1920}
      height={1080}
    />
  );
};

export default ImageSerializer;
