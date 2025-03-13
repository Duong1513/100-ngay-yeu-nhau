document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date("2024-12-03T00:00:00").getTime(); // Thay đổi ngày bắt đầu
    const hundredDays = startDate + (100 * 24 * 60 * 60 * 1000);
    const messages = [
        "Chúc mừng 2 chúng ta đã ở bên nhau được 100 ngàyyy",
        "Cảm ơn em bé vì đã là của anh trong suốt 100 ngày qua, luôn tha thứ và bên cạnh anh mọi lúc.",
        "Anh không muốn em bé của mình phải buồn khi bên cạnh anh nữa, và anh sẽ cố gắng thật nhiều để em bé cảm thấy như vậy.",
    ];

    const timelineData = [
        { date: "Ngày đầu tiên", description: "Lần đầu tiên chúng ta gặp nhau là ở trường. Hôm đó, cả 2 đứa mình đều tập văn nghệ và về muộn hihi <3", icon: "fa-heart" },
        { date: "Lần đèo nhau đầu tiên", description: "Lần đầu tiên anh được đèo em bé cũng ngay trong buổi tối đầu tiên hai chúng ta gặp nhau <3", icon: "fa-calendar-day" },
        { date: "Những lần đầu", description: "Nhờ có em bên cạnh, anh lần đầu được đi chụp photobooth, lần đầu tiên được người yêu mình hít hà sâu như thế... Cũng là cái hôn đầu tiên luônnnn. Anh yêu những gì mà em bé đã trao tặng cho anh lắm <3", icon: "fa-kiss-wink-heart" },
        // Thêm các sự kiện quan trọng khác
    ];

    const galleryImages = [
        "images/anh1.jpg", "images/anh2.jpg", "images/anh3.jpg",
        // Thêm tên file ảnh vào đây
    ];

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = hundredDays - now;
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            document.getElementById("countdown").innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
        } else {
            document.getElementById("countdown").innerHTML = "Cuối cùng chúng ta cũng yêu nhau được gần 1/3 của năm rồi <3";
        }
    }

    function displayMessage() {
        let messageIndex = 0;
        setInterval(() => {
            document.getElementById("messageText").innerHTML = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
        }, 5000);
    }

    function createTimeline() {
        const timeline = document.querySelector(".timeline");
        timelineData.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("timeline-item");
            itemDiv.innerHTML = `
                <h3>${item.date}</h3>
                <p>${item.description}</p>
            `;
            timeline.appendChild(itemDiv);
        });
    }

    function displayGallery() {
        const gallery = document.querySelector(".gallery");
        galleryImages.forEach(image => {
            const img = document.createElement("img");
            img.src = image;
            img.alt = image;
            gallery.appendChild(img);
        });
    }

    setInterval(updateCountdown, 1000);
    displayMessage();
    createTimeline();
    displayGallery();

    const showMessageBtn = document.getElementById('show-message-btn');
    const messageContainer = document.getElementById('message-container');
    const loveMessage = document.getElementById('love-message');
    const backBtn = document.getElementById('back-btn');
    const mainContainer = document.getElementById('main-container');

    showMessageBtn.addEventListener('click', () => {
        mainContainer.style.display = 'none';
        messageContainer.classList.add('show');
        loveMessage.textContent = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        loveMessage.textContent = message;
        console.log('Message:', message); // Thêm dòng này
        console.log('loveMessage element:', loveMessage); // Thêm dòng này
    });

    backBtn.addEventListener('click', () => {
        messageContainer.classList.remove('show');
        setTimeout(() => {
            mainContainer.style.display = 'block';
        }, 500);
    });
});