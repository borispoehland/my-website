import Image from 'next/image';
import { urlForImage } from '@cmsclient/sanity';
import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';
import GenericSection from '@components/GenericSection/GenericSection';

interface IAuthorProps {
  name: string;
  image: string;
  bio: any[];
}

interface IProps {
  author: IAuthorProps;
}

const Author = ({ author: { bio, image, name } }: IProps): JSX.Element => {
  return (
    <GenericSection heading="About the author" shortIntro="">
      <div className="author">
        <h3 className="author__name">{name}</h3>
        <div className="author__image">
          <Image
            src={urlForImage(image).url() as string}
            layout="fill"
            alt={`Image of ${name}`}
          />
        </div>
        <p className="author__bio">
          <CMSBlockContent blocks={bio} />
        </p>
      </div>
    </GenericSection>
  );
};

export default Author;
