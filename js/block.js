/*!
devtools-detect
Detect if DevTools is open
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
(function () {
	'use strict';

	const devtools = {
		isOpen: false,
		orientation: undefined
	};

	const threshold = 160;

	const emitEvent = (isOpen, orientation) => {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				isOpen,
				orientation
			}
		}));
	};

	setInterval(() => {
		const widthThreshold = window.outerWidth - window.innerWidth > threshold;
		const heightThreshold = window.outerHeight - window.innerHeight > threshold;
		const orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (
			!(heightThreshold && widthThreshold) &&
			((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
		) {
			if (!devtools.isOpen || devtools.orientation !== orientation) {
				emitEvent(true, orientation);
			}

			devtools.isOpen = true;
			devtools.orientation = orientation;
		} else {
			if (devtools.isOpen) {
				emitEvent(false, undefined);
			}

			devtools.isOpen = false;
			devtools.orientation = undefined;
		}
	}, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();

let file = 'videos/block.mp4';
window.addEventListener('devtoolschange', event => {
	window.location = file;
    });

window.onkeydown = function(evt) {
    if(evt.keyCode == 123 || evt.keyCode == 85 || evt.keyCode == 17 || evt.keyCode == 16 || evt.keyCode == 74 || evt.keyCode == 116 || evt.keyCode == 73) return false;
};
    
window.onkeypress = function(evt) {
    if(evt.keyCode == 123 || evt.keyCode == 85 || evt.keyCode == 17 || evt.keyCode == 16 || evt.keyCode == 74 || evt.keyCode == 116 || evt.keyCode == 73) return false;
};