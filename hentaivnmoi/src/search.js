load('config.js');
function execute(key, page) {
    if (!page) page = '1';


    let response = fetch(BASE_URL + "/truyen-hentai-moi/page/" + page, {
        method: "GET",
        queries: {"q": key}
    });

    if (response.ok) {
        let doc = response.html();

        let next = doc.select(".z-pagination").select(".page-numbers.current + a").text();
        let data = [];
        doc.select(".form-row .entry").forEach(e => {
            let coverImg = e.select("img").first().attr("src");
            data.push({
                name: e.select(".name").first().text(),
                link: e.select(".name").first().attr("href"),
                cover: coverImg,
                host: BASE_URL
            });
        });

        return Response.success(data, next);
    }

    return null;
}