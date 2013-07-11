var url = window.document.URL;
if (url.indexOf('localhost:9000') != -1 || url.indexOf('localhost:8080') != -1) {
    var backendUrl = 'http://localhost\\:3000/';
    var usernamePrefill = 'demo@sabu.fr';
	var passwordPrefill = 'password';
} else if (url.indexOf('192.168.1.91') != -1) {
    var backendUrl = 'http://192.168.1.91\\:8016/';
    var usernamePrefill = 'marin.jeremy@gmail.com';
	var passwordPrefill = '';
} else if (url.indexOf('grosgg.no-ip.org:8015') != -1) {
    var backendUrl = 'http://grosgg.no-ip.org\\:8016/';
    var usernamePrefill = 'marin.jeremy@gmail.com';
	var passwordPrefill = '';
} else {
	var backendUrl = 'http://grosgg.no-ip.org\\:8026/';
    var usernamePrefill = 'demo@sabu.fr';
	var passwordPrefill = 'password';
}

