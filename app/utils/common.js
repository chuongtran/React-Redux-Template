export function stripsHTML(content) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = content;
    return tmp.textContent || tmp.innerText || "";
}
export function getYoutubeVideoId(url) {
    if (!url) return null;
    const rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const patterns = url.match(rx);
    return patterns ? patterns[1] : null;
}

export function getVideoSource(url) {
    const sources = {
        youtube: ['youtube.com'],
    }
    return _.findKey(sources, (domains) => {
        return _.find(domains, domain => domain.indexOf(url));
    });
}

export function UUID() {
    return Math.random().toString(36).substring(9) + (new Date()).getTime().toString(36);   
}