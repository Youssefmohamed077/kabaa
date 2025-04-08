document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-item");
    let sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100; // تعديل لتعويض المسافة العلوية

        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                let sectionId = section.getAttribute("id");

                // إزالة الكلاس النشط من جميع العناصر
                menuItems.forEach((item) => {
                    item.classList.remove("active");
                    if (item.getAttribute("href").includes(sectionId)) {
                        item.classList.add("active");
                    }
                });
            }
        });
    });
});
