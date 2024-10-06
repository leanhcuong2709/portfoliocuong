document.addEventListener('DOMContentLoaded', function() {
    var seeMoreBtn = document.getElementById('seeMoreBtn');
    var hiddenWorks = document.querySelectorAll('.work.hidden');
    var shownCount = 0; // Đếm số lượng sản phẩm đã hiển thị thêm

    seeMoreBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

        // Nếu hiện tại đang là "See more", hiển thị sản phẩm
        if (seeMoreBtn.textContent === 'See more') {
            // Hiển thị thêm 3 sản phẩm một lần
            for (var i = 0; i < 3 && shownCount < hiddenWorks.length; i++) {
                hiddenWorks[shownCount].style.display = 'block';
                shownCount++;
            }

            // Đổi nút thành "Thu gọn" khi đã hiển thị sản phẩm
            if (shownCount >= hiddenWorks.length) {
                seeMoreBtn.textContent = 'Show less';
            }
        } else {
            // Nếu đang là "Thu gọn", ẩn các sản phẩm đã hiển thị
            hiddenWorks.forEach(function(work) {
                work.style.display = 'none';
            });

            // Đặt lại số sản phẩm đã hiển thị
            shownCount = 0;
            seeMoreBtn.textContent = 'See more'; // Đổi nút thành "See more"
        }
    });
});
