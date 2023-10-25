load('config.js');

function execute() {
    let response = fetch(BASE_URL);
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        let categoryElement = undefined;
        doc.select("#site-nav li").forEach((e) =>{
            if (e.select("a").text().indexOf("Thể loại") >= 0) {
                categoryElement = e;
            }
        })
        categoryElement.select("ul li a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr("href"),
                script: "gen.js"
            })
        });
        return Response.success(genres);
    }

    return null;
}