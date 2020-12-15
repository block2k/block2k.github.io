function tinh() {
    var hocky1 = document.getElementById("diem1").value; if (hocky1 == "") hocky1 = 0;
    var percent1 = document.getElementById("weight1").value; if (percent1 == "") percent1 = 0;
    var hocky2 = document.getElementById("diem2").value; if (hocky2 == "") hocky2 = 0;
    var percent2 = document.getElementById("weight2").value; if (percent2 == "") percent2 = 0;
    var hocky3 = document.getElementById("diem3").value; if (hocky3 == "") hocky3 = 0;
    var percent3 = document.getElementById("weight3").value; if (percent3 == "") percent3 = 0;
    var hocky4 = document.getElementById("diem4").value; if (hocky4 == "") hocky4 = 0;
    var percent4 = document.getElementById("weight4").value; if (percent4 == "") percent4 = 0;
    var hocky5 = document.getElementById("diem5").value; if (hocky5 == "") hocky5 = 0;
    var percent5 = document.getElementById("weight5").value; if (percent5 == "") percent5 = 0;
    var hocky6 = document.getElementById("diem6").value; if (hocky6 == "") hocky6 = 0;
    var percent6 = document.getElementById("weight6").value; if (percent6 == "") percent6 = 0;
    var hocky7 = document.getElementById("diem7").value; if (hocky7 == "") hocky7 = 0;
    var percent7 = document.getElementById("weight7").value; if (percent7 == "") percent7 = 0;
    var hocky8 = document.getElementById("diem8").value; if (hocky8 == "") hocky8 = 0;
    var percent8 = document.getElementById("weight8").value; if (percent8 == "") percent8 = 0;
    var hocky9 = document.getElementById("diem9").value; if (hocky9 == "") hocky9 = 0;
    var percent9 = document.getElementById("weight9").value; if (percent9 == "") percent9 = 0;
    var hocky10 = document.getElementById("diem10").value; if (hocky10 == "") hocky10 = 0;
    var percent10 = document.getElementById("weight10").value; if (percent10 == "") percent10 = 0;
    var hocky11 = document.getElementById("diem11").value; if (hocky11 == "") hocky11 = 0;
    var percent11 = document.getElementById("weight11").value; if (percent11 == "") percent11 = 0;
    var hocky12 = document.getElementById("diem12").value; if (hocky12 == "") hocky12 = 0;
    var percent12 = document.getElementById("weight12").value; if (percent12 == "") percent12 = 0;
    var hocky13 = document.getElementById("diem13").value; if (hocky13 == "") hocky13 = 0;
    var percent13 = document.getElementById("weight13").value; if (percent13 == "") percent13 = 0;
    var hocky14 = document.getElementById("diem14").value; if (hocky14 == "") hocky14 = 0;
    var percent14 = document.getElementById("weight14").value; if (percent14 == "") percent14 = 0;
    var hocky15 = document.getElementById("diem15").value; if (hocky15 == "") hocky15 = 0;
    var percent15 = document.getElementById("weight15").value; if (percent15 == "") percent15 = 0;
    var hocky16 = document.getElementById("diem16").value; if (hocky16 == "") hocky16 = 0;
    var percent16 = document.getElementById("weight16").value; if (percent16 == "") percent16 = 0;
    var fe = document.getElementById("weightFE").value;
    var diemtrungbinh = (5 - (
        hocky1 * percent1 / 100 +
        hocky2 * percent2 / 100 +
        hocky3 * percent3 / 100 +
        hocky4 * percent4 / 100 +
        hocky5 * percent5 / 100 +
        hocky6 * percent6 / 100 +
        hocky7 * percent7 / 100 +
        hocky8 * percent8 / 100 +
        hocky9 * percent9 / 100 +
        hocky10 * percent10 / 100 +
        hocky11 * percent11 / 100 +
        hocky12 * percent12 / 100 +
        hocky13 * percent13 / 100 +
        hocky14 * percent14 / 100 +
        hocky15 * percent15 / 100 +
        hocky16 * percent16 / 100)) / (fe / 100);
    if (diemtrungbinh < 5) {
        document.getElementById("lenlop").innerHTML = "Điểm FE cần đạt là " + diemtrungbinh.toFixed(1);
    } else if (diemtrungbinh >= 5 && diemtrungbinh < 7.0) {
        document.getElementById("lenlop").innerHTML = "Điểm FE cần đạt là " + diemtrungbinh.toFixed(1);
    } else if (diemtrungbinh >= 7 && diemtrungbinh < 8) {
        document.getElementById("lenlop").innerHTML = "Điểm FE cần đạt là " + diemtrungbinh.toFixed(1);
    } else if (diemtrungbinh >= 8 && diemtrungbinh) {
        document.getElementById("lenlop").innerHTML = "Điểm FE cần đạt là " + diemtrungbinh.toFixed(1);
        swal("Wow !", "Đăng ký luôn BLOCK5 đi, " + diemtrungbinh.toFixed(1), "success");
    }
    if (hocky1 > 10 || hocky1 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky2 > 10 || hocky2 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (fe == "") {
        swal("Thất bại !", "Bạn phải nhập % điểm FE", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky3 > 10 || hocky3 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    }
    else if (hocky4 > 10 || hocky4 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky5 > 10 || hocky5 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    }
    else if (hocky6 > 10 || hocky6 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky7 > 10 || hocky7 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky8 > 10 || hocky8 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky9 > 10 || hocky9 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky10 > 10 || hocky10 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky11 > 10 || hocky11 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky12 > 10 || hocky12 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky13 > 10 || hocky13 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky14 > 10 || hocky14 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky15 > 10 || hocky15 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else if (hocky16 > 10 || hocky16 < 0) {
        swal("Thất bại !", "Vui lòng nhập đúng định dạng, điểm chỉ từ 0 - 10", "error");
        document.getElementById("daura").style.display = "none";
    } else {
        document.getElementById("ketqua").innerHTML = (diemtrungbinh.toFixed(2));
        document.getElementById("daura").style.display = "block";
    }
}