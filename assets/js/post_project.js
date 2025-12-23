        document.addEventListener('DOMContentLoaded', () => {
            const row = document.getElementById('categoryRow');
            const arrowRight = document.getElementById('scrollRightArrow');
            const arrowLeft = document.getElementById('scrollLeftArrow');
            
            // Jarak gulir disesuaikan dengan perkiraan lebar 3 kartu
            const scrollDistance = 720; 

            // Fungsi untuk menggulir ke kanan
            arrowRight.addEventListener('click', () => {
                row.scrollLeft += scrollDistance;
            });

            // Fungsi untuk menggulir ke kiri
            arrowLeft.addEventListener('click', () => {
                row.scrollLeft -= scrollDistance;
            });
            
            // Opsional: Logika untuk menyembunyikan panah saat sudah di ujung
            function checkScrollPosition() {
                // Sembunyikan panah kiri jika sudah di paling kiri
                if (row.scrollLeft === 0) {
                    arrowLeft.classList.add('hidden');
                } else {
                    arrowLeft.classList.remove('hidden');
                }

                // Sembunyikan panah kanan jika sudah di paling kanan (toleransi 1px)
                if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 1) {
                    arrowRight.classList.add('hidden');
                } else {
                    arrowRight.classList.remove('hidden');
                }
            }

            // Panggil saat halaman dimuat
            checkScrollPosition();
            
            // Panggil saat terjadi guliran
            row.addEventListener('scroll', checkScrollPosition);
        });

        const searchBar = document.getElementById("searchBar");
        const searchPopup = document.getElementById("searchPopup");

        searchBar.addEventListener("click", () => {
            searchPopup.style.display = "flex";
        });

        document.addEventListener("click", function(e) {
            if (!searchBar.contains(e.target) && !searchPopup.contains(e.target)) {
                searchPopup.style.display = "none";
            }
        });
                    document.addEventListener('DOMContentLoaded', () => {
            const row = document.getElementById('categoryRow');
            const arrowRight = document.getElementById('scrollRightArrow');
            const arrowLeft = document.getElementById('scrollLeftArrow');
            
            // Jarak gulir disesuaikan dengan perkiraan lebar 3 kartu
            const scrollDistance = 720; 

            // Fungsi untuk menggulir ke kanan
            arrowRight.addEventListener('click', () => {
                row.scrollLeft += scrollDistance;
            });

            // Fungsi untuk menggulir ke kiri
            arrowLeft.addEventListener('click', () => {
                row.scrollLeft -= scrollDistance;
            });
            
            // Opsional: Logika untuk menyembunyikan panah saat sudah di ujung
            function checkScrollPosition() {
                // Sembunyikan panah kiri jika sudah di paling kiri
                if (row.scrollLeft === 0) {
                    arrowLeft.classList.add('hidden');
                } else {
                    arrowLeft.classList.remove('hidden');
                }

                // Sembunyikan panah kanan jika sudah di paling kanan (toleransi 1px)
                if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 1) {
                    arrowRight.classList.add('hidden');
                } else {
                    arrowRight.classList.remove('hidden');
                }
            }

            // Panggil saat halaman dimuat
            checkScrollPosition();
            
            // Panggil saat terjadi guliran
            row.addEventListener('scroll', checkScrollPosition);
        });
            const params = new URLSearchParams(window.location.search);
    const keyword = params.get("q");

    if (keyword) {
        document.getElementById("searchInput").value = keyword;
    }

