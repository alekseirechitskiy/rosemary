'use strict';

import * as functions from './modules/functions.js';
import headerScripts from './modules/header.js';
import tabs from './modules/tabs.js';
import contentsSlider from './modules/contentsSlider.js';
import rpSlider from './modules/rpSlider.js';

functions.isWebp();
headerScripts();
tabs();
contentsSlider();
rpSlider();
