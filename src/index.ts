import App from './components/app';
import Add from './components/add';

import { lists } from './components/list';



let appID = document.querySelector('#app');

appID?.appendChild(Add())
appID?.appendChild(App(lists.get()))