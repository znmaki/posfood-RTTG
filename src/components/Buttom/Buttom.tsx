import './styles/Buttom.css';

interface ITitle {
	title: string;
	imageSrc?: string;
	imageAlt?: string;
}

export const ButtomWithIcon = ({ title, imageSrc, imageAlt }: ITitle) => {
	return (
		<div className='btn-icon min-w-[9rem]'>
			<img className='max-w-[2rem] mr-2' src={imageSrc} alt={imageAlt} />
			<p>{title}</p>
		</div>
	)
}