// 平滑滚动时高亮导航
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// 图片模态框功能
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// 关闭图片模态框
const imageModal = document.getElementById("imageModal");
const closeBtn = document.querySelector("#imageModal .close");

if (closeBtn) {
    closeBtn.onclick = function() {
        imageModal.style.display = "none";
    }
}


// 从竞赛列表跳转到对应的证书图片
function scrollToCertificate(certAlt) {
    // 滚动到荣誉部分
    const honorsSection = document.getElementById("honors");
    if (honorsSection) {
        honorsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        
        // 延迟一点时间，等待滚动完成后再查找并点击图片
        setTimeout(() => {
            // 查找对应alt属性的图片
            const certificateImages = document.querySelectorAll("#honors .certificate-item img");
            certificateImages.forEach(img => {
                if (img.alt === certAlt) {
                    // 触发图片的点击事件来打开模态框
                    openModal(img);
                }
            });
        }, 500);
    }
}

// 视频模态框功能
function openVideoModal(videoSrc) {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const videoSource = document.getElementById("videoSource");
    
    videoSource.src = videoSrc;
    modalVideo.load(); // 重新加载视频源
    modal.style.display = "block";
    modalVideo.play(); // 自动播放
}

// 关闭视频模态框
const videoModal = document.getElementById("videoModal");
const closeVideoBtn = document.querySelector(".close-video");

if (closeVideoBtn) {
    closeVideoBtn.onclick = function() {
        const modalVideo = document.getElementById("modalVideo");
        modalVideo.pause(); // 暂停视频
        modalVideo.currentTime = 0; // 重置到开头
        videoModal.style.display = "none";
    }
}

// 点击视频模态框外部关闭
window.addEventListener("click", function(event) {
    const imageModal = document.getElementById("imageModal");
    const videoModal = document.getElementById("videoModal");
    
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
    if (event.target == videoModal) {
        const modalVideo = document.getElementById("modalVideo");
        modalVideo.pause();
        modalVideo.currentTime = 0;
        videoModal.style.display = "none";
    }
});