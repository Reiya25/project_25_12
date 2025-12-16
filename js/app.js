AOS.init();

// 사이트 접속하면
document.addEventListener("DOMContentLoaded", function(){
    // 검색창에 적은 값
    const searchInput = document.getElementById("searchInput");
    // portfolio-item에 있는 모든 값
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    
    // 검색을 하면
    searchInput.addEventListener("input", function(){
        // 입력한 검색어를 대문자 > 소문자로 변환
        const searchTerm = this.value.toLowerCase();

        // 비교
        portfolioItems.forEach((item) => {
            
            // h4 값을 대문자 > 소문자 후 확인한 값
            const title = item.querySelector("h4").textContent.toLowerCase();
            
            // includes: 포함
            if(title.includes(searchTerm)) {
                // 표시
                item.style.display="block";
            } else {
                // 미표시
                item.style.display="none";
            }
        })
    })
    
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((button) => {
        // 버튼 클릭하면
        button.addEventListener("click", function() {
            // Attribute: 속성
            const filter = this.getAttribute("data-filter");
            
            portfolioItems.forEach((item) => {
                // all or data-category에 값이 data-filter 값 비교
                if(filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display="block";     
                } else {
                    item.style.display="none";
                }
            })
        })
    })
})