function FindProxyForURL(url,host) {
    if(host.indexOf('brainpop.com') > -1) {
        return "PROXY 182.16.103.102:31200;DIRECT;";
    }
    return "DIRECT";
}
