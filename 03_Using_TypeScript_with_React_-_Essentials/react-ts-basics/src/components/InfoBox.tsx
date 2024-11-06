import { type ReactNode } from 'react';

type InfoBoxProps = {
	mode: 'hint' | 'warning';
	severity?: 'low' | 'medium' | 'high';
	children: ReactNode;
};

function InfoBox(props: InfoBoxProps) {
	const { mode, severity, children } = props;

	const hintMode: string = 'infobox-hint';
	const warningMode: string = `infobox-warning warning--${severity}`;
	const asideClassName: string = mode === 'hint' ? hintMode : warningMode;

	return (
		<aside className={`infobox ${asideClassName}`}>
			{mode === 'warning' ? <h2>Warning</h2> : null}
			{children}
		</aside>
	);
}

export default InfoBox;
