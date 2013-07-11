url = window.document.URL;
if (url.indexOf('localhost:9000') != -1 || url.indexOf('localhost:8080') != -1) {
    backendUrl = 'http://localhost\\:3000/';
    usernamePrefill = 'demo@sabu.fr';
	passwordPrefill = 'password';
} else if (url.indexOf('192.168.1.91') != -1) {
    backendUrl = 'http://192.168.1.91\\:8016/';
    usernamePrefill = 'marin.jeremy@gmail.com';
	passwordPrefill = '';
} else if (url.indexOf('grosgg.no-ip.org:8015') != -1) {
    backendUrl = 'http://grosgg.no-ip.org\\:8016/';
    usernamePrefill = 'marin.jeremy@gmail.com';
	passwordPrefill = '';
} else {
	backendUrl = 'http://grosgg.no-ip.org\\:8026/';
    usernamePrefill = 'demo@sabu.fr';
	passwordPrefill = 'password';
}

