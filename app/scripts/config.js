var url = window.document.URL;
if (url.indexOf('localhost:9000') != -1 || url.indexOf('localhost:8080') != -1) {
    var backendUrl = 'http://localhost\\:3000/';
    var usernamePrefill = 'demo@sabu.fr';
	var passwordPrefill = 'password';
} else if (url.indexOf('192.168.1.91') != -1) {
    var backendUrl = 'http://192.168.1.91\\:8016/';
    var usernamePrefill = 'marin.jeremy@gmail.com';
	var passwordPrefill = '';
} else {
    var backendUrl = 'http://backend.good-morning.sabu.fr/';
    var usernamePrefill = 'marin.jeremy@gmail.com';
	var passwordPrefill = '';
}
