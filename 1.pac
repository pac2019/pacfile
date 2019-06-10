function FindProxyForURL(url,host) {
    if(host.indexOf('khanacademy.org') > -1) {
        return "PROXY 182.16.103.102:31200;DIRECT;";
    }
    if(host.indexOf('kastatic.org') > -1) {
        return "PROXY 182.16.103.102:31200;DIRECT;";
    }
    if(host.indexOf('kasandbox.org') > -1) {
        return "PROXY 182.16.103.102:31200;DIRECT;";
    }
    return "DIRECT";
}
