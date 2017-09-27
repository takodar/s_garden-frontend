let curLocation = location.href;
let hostName = '';
if (curLocation.substr('local') !== -1) {
    hostName = 'http://localhost:3111';
}
else {
    hostName = 'https://service.takoda.net';
}

export const reactConfig = {host: hostName, apiUrl: ''};