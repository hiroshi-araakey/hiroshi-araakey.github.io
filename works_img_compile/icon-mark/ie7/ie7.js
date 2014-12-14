/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon-mark\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-Mark-30': '&#xe600;',
		'icon-Mark-29': '&#xe601;',
		'icon-Mark-28': '&#xe602;',
		'icon-Mark-27': '&#xe603;',
		'icon-Mark-26': '&#xe604;',
		'icon-Mark-25': '&#xe605;',
		'icon-Mark-24': '&#xe606;',
		'icon-Mark-23': '&#xe607;',
		'icon-Mark-22': '&#xe608;',
		'icon-Mark-21': '&#xe609;',
		'icon-Mark-20': '&#xe60a;',
		'icon-Mark-19': '&#xe60b;',
		'icon-Mark-18': '&#xe60c;',
		'icon-Mark-17': '&#xe60d;',
		'icon-Mark-16': '&#xe60e;',
		'icon-Mark-15': '&#xe60f;',
		'icon-Mark-14': '&#xe610;',
		'icon-Mark-13': '&#xe611;',
		'icon-Mark-12': '&#xe612;',
		'icon-Mark-11': '&#xe613;',
		'icon-Mark-10': '&#xe614;',
		'icon-Mark-09': '&#xe615;',
		'icon-Mark-08': '&#xe616;',
		'icon-Mark-07': '&#xe617;',
		'icon-Mark-06': '&#xe618;',
		'icon-Mark-05': '&#xe619;',
		'icon-Mark-04': '&#xe61a;',
		'icon-Mark-03': '&#xe61b;',
		'icon-Mark-02': '&#xe61c;',
		'icon-Mark-01': '&#xe61d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
