import React from 'react';

import PortalLayout from '../layouts/PortalLayout';

const App = ({location: {pathname} = {}} = {}) => (
    <PortalLayout pathname={pathname}>
        TODO: Main page
    </PortalLayout>
);

export default App;