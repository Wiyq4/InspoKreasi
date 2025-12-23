
    const searchInput = document.getElementById("searchInput");
    const dropdown = document.getElementById("searchDropdown");

    searchInput.addEventListener("focus", () => {
        dropdown.style.display = "block";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            dropdown.style.display = "none";
        }
    });
    // FUNGSI JAVASCRIPT SEDERHANA UNTUK MENGGESER SLIDER
        function scrollSlider(scrollAmount) {
            const slider = document.getElementById('categoriesSlider');
            slider.scrollLeft += scrollAmount;
        }
    const params = new URLSearchParams(window.location.search);
    const keyword = params.get("q");

    if (keyword) {
        document.getElementById("searchInput").value = keyword;
    }
    document.addEventListener("DOMContentLoaded", function () {
    const warning = document.getElementById("mobileWarning");
    const closeBtn = document.getElementById("closeWarning");

    // Cek ukuran layar (mobile)
    if (window.innerWidth <= 768) {
        warning.style.display = "flex";
    }

    // Tombol tutup
    closeBtn.addEventListener("click", function () {
        warning.style.display = "none";
    });
});