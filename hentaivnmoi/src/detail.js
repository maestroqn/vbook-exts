load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = doc.select(".comic-info .book img").first().attr("src");
        let genres = [];
        doc.select(".info .meta-data .genre a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr("href"),
                script: "gen.js"
            });
        });
        let detailElement = doc.select(".tsinfo .imptdt i");
        let updatedDate = detailElement.get(1).text();
        let chapterCount = detailElement.get(2).text();
        let view = detailElement.last().text();
        let detail = "";
        if (view) {
            detail = "Cập nhật: " + updatedDate + "<br>Lượt xem: " + view + "<br>Số chương: " + chapterCount;
        }
        return Response.success({
            name: doc.select(".comic-info .info h1.name").first().text(),
            cover: coverImg,
            author: doc.select(".info .meta-data .author a").first().text(),
            description: doc.select(".info .comic-description .inner").first().text()   ,
            detail: detail,
            ongoing: detailElement.first().text().indexOf("Đang Cập Nhật") >= 0,
            genres: genres,
            host: BASE_URL
        });
    }

    return null;
}