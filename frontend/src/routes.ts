import { Router } from '@vaadin/router';

import './pages/homepage';

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

router.setRoutes([
  { path: '/', component: 'homepage-element' },
]);
