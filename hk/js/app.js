$(function () {
    var $btn1 = $("#btn1");
    $btn1.click(function () {
        $("#ansbox").empty();
        var $ansbox = $("#ansbox");
        var a1 = $("input[name=Q1]:checked").val();
        var a2 = $("input[name=Q2]:checked").val();
        var a3 = $("input[name=Q3]:checked").val();
        var a4 = $("input[name=Q4]:checked").val();
        var a5 = $("input[name=Q5]:checked").val();
        var a6 = $("input[name=Q6]:checked").val();
        var a7 = $("input[name=Q7]:checked").val();
        var a8 = $("input[name=Q8]:checked").val();
        var a9 = $("input[name=Q9]:checked").val();
        var a10 = $("input[name=Q10]:checked").val();
        var a11 = $("input[name=Q11]:checked").val();
        var a12 = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6) + parseInt(a7) + parseInt(a8) + parseInt(a9) + parseInt(a10) + parseInt(a11);
        if (a12 < 12) {
            $("#ansbox").append("A.急切 你熱情奔放，活力四射。衝勁和感染力的背後，也常常難逃急切的心態，尤其在事情發展陷入困境之時，這份心急火燎的情緒更是愈發強烈。凡事欲速則不達，放下急切的腳步和心情，擁抱迎面而來的挑戰和挫折，幸福的喜悅將會接踵而至。");
        } else if (a12 > 11 && a12 < 16) {
            $("#ansbox").append("B.貪婪 什麼都想要，所以什麼都得不到！所謂不能堅持、缺乏執著都是由於你三心二意的貪婪。慾望是個無底洞，如果空有一顆無法滿足的心，得到再多美好的東西都無法安心享受擁有的幸福。找到自己的幸福所向，左顧右盼只會落入失落的世界。");
        } else if (a12 > 15 && a12 < 23) {
            $("#ansbox").append("C.苛刻 對人對己要求甚高的態度，確實容易成就你不凡的領導力和卓越的事業。但如果落入極盡苛刻的要求中，於自己容易陷入完美主義的糾結，於別人留下難以親近的印象，而難成其事。放下苛刻，保持愉快而輕鬆的心境，和諧的關係才是幸福之所在。");
        } else {
            $("#ansbox").append("未完成填寫");
        }
    });
});
