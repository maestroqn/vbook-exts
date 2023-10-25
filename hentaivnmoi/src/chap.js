load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".chapter-content .content-text img").forEach(e => {
            let img = e.attr("src");
            if (img) {
                data.push(img);
            }
        });
        return Response.success(data);
    }
    return null;
}