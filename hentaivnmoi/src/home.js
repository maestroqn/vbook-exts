load('config.js');
function execute() {
    return Response.success([
        {title: "Đề cử", input: BASE_URL, script: "gen.js"},
        {title: "Truyện mới", input: BASE_URL + "/truyen-hentai-moi", script: "gen.js"},
        {title: "Top all", input: BASE_URL + "/truyen-hot", script: "gen.js"},
        {title: "Top năm", input: BASE_URL + "/truyen-hot/truyen-hot-nam", script: "gen.js"},
        {title: "Top tháng", input: BASE_URL + "/truyen-hot/truyen-hot-thang", script: "gen.js"},
        {title: "Top tuần", input: BASE_URL + "/truyen-hot/truyen-hot-tuan", script: "gen.js"},
        {title: "Top ngày", input: BASE_URL + "/truyen-hot/truyen-hentai-hot-hom-nay", script: "gen.js"},
        {title: "Oneshot", input: BASE_URL + "/the-loai/oneshot", script: "gen.js"},
        {title: "Full Color", input: BASE_URL + "/the-loai/full-color", script: "gen.js"},
        {title: "Không che", input: BASE_URL + "/the-loai/khong-che", script: "gen.js"},
    ]);
}