import { type ReactNode } from 'react';

type HintBoxProps = {
	mode: 'hint';
	severity: undefined;
	children: ReactNode;
};

type WarningBoxProps = {
	mode: 'warning';
	severity: 'low' | 'medium' | 'high';
	children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

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
