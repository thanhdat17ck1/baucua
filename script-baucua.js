// Tạo mảng chứa các số từ 1 đến 6
const mang = [1, 2, 3, 4, 5, 6];
let arrBauCua = [1,1,1]
var audio = document.getElementById('myAudio');

$(document).ready(function(e) {
    Load()
})


// Hàm random một phần tử từ mảng
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function RenderName(value) {
    if(value == 1) {
        return `<img src="images/bau.png" />`;
    }
    else if(value == 2) {
        return `<img src="images/cua.png" />`;
    }
    else if(value == 3) {
        return `<img src="images/toom.png" />`;
    }
    else if(value == 4) {
        return `<img src="images/ca.png" />`;;
    }
    else if(value == 5) {
        return `<img src="images/ga.png" />`;;
    }
    else {
        return `<img src="images/nai.png" />`;
    }
}

function Load() {
    if(arrBauCua.length == 0) {
        for (let i = 0; i < 3; i++) {
            const ketQua = getRandomElement(mang);
            arrBauCua.push(ketQua);
            console.log("Kết quả lần " + (i + 1) + ": " + ketQua);
        }
    }

    let html = "";
    arrBauCua.map((item, index) => {
        html += `
            <li>${RenderName(item)}</li>
        `
    })
    arrBauCua = []
    console.log(html);
    $(".dia-tron--1 ul").html(html)
}

$(function () {
    // Kích hoạt tính năng kéo và thả cho phần tử có class "nap-day"
    $(".nap-day").draggable();

    $(".btn1").on("click", function() {
        $(".nap-day").css({ top: 0, left: 0 });
    })

    $(".btn2").click(function () {
        audio.play();
        $(".nap-day").css({ top: 0, left: 0 });
        // Lấy kết quả 3 lần
        for (let i = 0; i < 3; i++) {
            const ketQua = getRandomElement(mang);
            arrBauCua.push(ketQua);
            console.log("Kết quả lần " + (i + 1) + ": " + ketQua);
        }

        let html = "";
        arrBauCua.map((item, index) => {
            html += `
                <li>${RenderName(item)}</li>
            `
        })
        arrBauCua = []
        $(".dia-tron--1 ul").html(html)

        // Thêm class "rung-lac" để áp dụng hiệu ứng rung lắc
        $(".dia-tron").addClass("rung-lac");

        // Sau 0.5 giây, loại bỏ class "rung-lac" để kết thúc hiệu ứng
        setTimeout(function () {
            $(".dia-tron").removeClass("rung-lac");
            toastr.success('Xốc dĩa Thành công!');
            $(".nap-day").css({ top: 0, left: 0 });
        }, 500);
        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
        }, 2000);
        
    });

    $(".btn3").on("click", function() {
        $(".nap-day").css({
            "position": "relative",
            "left": "327px",
            "top": "-72px"
        });
        console.log(arrBauCua);
    })
});