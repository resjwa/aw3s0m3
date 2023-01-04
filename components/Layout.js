import { Fragment } from 'react';
import Nav from './Nav/Nav';

const Layout = props => {
	return (
		<Fragment>
			<Nav />
			{props.children}
		</Fragment>
	);
};

export default Layout;
