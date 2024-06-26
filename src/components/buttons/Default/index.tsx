import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, useState } from 'react';
import './styles.modules.scss';
import { DefaultCustomProps } from './types';

export const ButtonDefault: FC<DefaultCustomProps> = ({
	styles,
	text,
	icon,
	anchorHRef = false,
	isLeft = false,
	handleAction,
	...rest
}) => {
	const CustomTag = anchorHRef ? 'a' : 'button';
	const defaultStyle = {
		background: styles?.bg.default,
		width: text ? '100%' : '50px',
		transform: `rotate(${isLeft ? '-180deg' : ''})`,
	};
	const [isHovering, setIsHovering] = useState(false);
	const generateAttrs = () => {
		if (anchorHRef) return { href: handleAction as string };
		return {
			onMouseOver: () => setIsHovering(true),
			onMouseLeave: () => setIsHovering(false),
			onClick: handleAction,
		};
	};
	return (
		<CustomTag
			style={defaultStyle}
			className='default-button border-radius-default position-relative'
			{...generateAttrs()}
			{...rest}>
			{text}
			{icon && styles?.iconBg && (
				<i
					style={{ background: styles?.iconBg[isHovering ? 'hover' : 'default'] }}
					className='position-absolute border-radius-full display-flex centralize-y'>
					{icon}
				</i>
			)}
		</CustomTag>
	);
};
