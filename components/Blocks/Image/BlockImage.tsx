import Image from '@/components/Image/Image';
import { ContentBlock } from '@/graphql/generated';

type Props = {
	block: ContentBlock,
	src: string,
	alt: string,
};

export default function BlockImage ( props : Props ) {
	return <Image {...props} alt={props.alt} />
}
