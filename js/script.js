$(document).ready(function(){
    $("#gallery2").click(function(){
        $("#main-area").html(
            `<p class="gallery__intro">
                一年一度的「媽祖在馬祖—昇天祭」均安排在農曆九月初九日重陽節，
                相傳是為媽祖得道升天的日子，近年馬祖人為感念媽祖捨己為人、普渡世間的精神，
                特別舉辦媽祖昇天祭，不僅希望「媽祖在馬祖」不只是口號，也讓世人感念媽祖孝順慈愛的精神。
            </p>
            <div class="gallery">
                <img src="https://www.matsu-nsa.gov.tw/UserFiles/image/festival/m_p02.jpg" alt="" class="gallery__img gallery__img1">
                <img src="https://www.matsu-nsa.gov.tw/UserFiles/image/festival/m_p03.jpg" alt="" class="gallery__img gallery__img2">
                <img src="https://www.matsu-nsa.gov.tw/UserFiles/image/festival/m_p04.jpg" alt="" class="gallery__img gallery__img3">
                <img src="https://www.matsu-nsa.gov.tw/UserFiles/image/festival/m_p05.jpg" alt="" class="gallery__img gallery__img4">
                <img src="https://www.matsu-nsa.gov.tw/UserFiles/image/festival/m_p06.jpg" alt="" class="gallery__img gallery__img5">
                <img src="https://www.matsu-nsa.gov.tw/UserFiles/image/festival/m_p07.jpg" alt="" class="gallery__img gallery__img6">
            </div>`
        );
    });
    $("#gallery").click(function(){
        $("#main-area").html(
            `<p class="gallery__intro">
                香火裊裊中，十萬信徒、九天八夜徒步，
                無論男女老少、貧富階級皆點燃一炷炷香，與神明對話，直達天聽。
                臺灣的媽祖進香遶境超過百年歷史，被稱為世界三大宗教盛事之一。
            </p>
            <div class="gallery">
                <img src="https://i1.wp.com/1.bp.blogspot.com/-wCGyJP96354/Xk5Rle00ROI/AAAAAAAAE9E/VgVjWUWp-BU3FXRtMivqXhKFmO_8f42UACEwYBhgL/s640/https___www.settour.com.tw_ss_img_GRT_0000_0000_10_ori_26258257.jpg?resize=640%2C426&ssl=1" alt="" class="gallery__img gallery__img7">
                <img src="https://i2.wp.com/1.bp.blogspot.com/--p6UkAUrfxo/Xk5RlfbY15I/AAAAAAAAE9A/Xf3oRcKVxvoR5jODHZExblqPSfjWhzCawCEwYBhgL/s640/https___www.settour.com.tw_ss_img_GRT_0000_0000_09_ori_26258255.jpg?resize=640%2C426&ssl=1" alt="" class="gallery__img gallery__img8">
                <img src="https://i0.wp.com/1.bp.blogspot.com/-zyoHkZaleBY/Xk5Rf3n1NnI/AAAAAAAAE8w/OLDwNrILVKM0b-PT4WUDJNWbqIx2_aytgCLcBGAsYHQ/s640/https___www.settour.com.tw_ss_img_GRT_0000_0000_12_ori_26258341.jpg?resize=640%2C425&ssl=1" alt="" class="gallery__img gallery__img9">
                <img src="https://i1.wp.com/1.bp.blogspot.com/-xfGPiYYbxTU/Xk5SW1B4mFI/AAAAAAAAE9M/4TPQlHzADN8o-q4itROJsDJSBlt0Ux3PQCLcBGAsYHQ/s640/81147728_3010505532294471_3781423927637573632_o.jpg?resize=640%2C480&ssl=1" alt="" class="gallery__img gallery__img10">
                <img src="https://i2.wp.com/1.bp.blogspot.com/-yU7Pr5guyoc/Xk5SW6rDS-I/AAAAAAAAE9Q/TUmwzUALuGo3NeMh2A42UK5yVRM49cEoQCLcBGAsYHQ/s640/75159580_2871341372877555_4088343952762077184_o.jpg?resize=640%2C480&ssl=1" alt="" class="gallery__img gallery__img11">
                <img src="https://i2.wp.com/tw.tranews.com/Show/images/News/3298439_1.jpg?resize=640%2C480" alt="" class="gallery__img gallery__img12">
            </div>`
        );
    });
    $(".sort_list li").click(function(){
        $(".sort_list li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
    });
});