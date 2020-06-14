import App from './components/app';
import Add from './components/add';

import { lists } from './components/list';

import './style.css'

let appID = document.querySelector('#app');

appID?.appendChild(Add())
appID?.appendChild(document.createElement("br"))
appID?.appendChild(App(lists.get()))