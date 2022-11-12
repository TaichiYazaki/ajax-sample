$(function () {
    $("#note_form").on("submit", function (e) {
        e.preventDefault();// デフォルトのイベント(ページの遷移やデータ送信など)を無効にする
        $.ajax({
            url: "/submit"// リクエストを送信するURLを指定  $(this).attr("action")でもOK
            , type: "POST"// HTTPメソッドを指定（デフォルトはGET）
            , data: {
                note: $("#note").val()// 送信データ
            }
        })
            // リクエストが成功した場合に行う処理
            .done(function (data) {
                $(".notes").append(data);// HTMLを追加
                $("#note").val("");// 入力欄を空にする
            })
            // リクエストが成功しなかった場合に行う処理
            .fail(function () {
                alert("error!!!");// 通信に失敗した場合の処理
            })
    })
})