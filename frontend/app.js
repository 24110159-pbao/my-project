// =============================
// CẤU HÌNH BACKEND
// =============================

const API_URL = "https://type-organize-completing-tower.trycloudflare.com";  // Thay đổi URL backend nếu cần


// =============================
// LẤY ELEMENT HTML
// =============================

const apiUrl = document.getElementById("apiUrl");

const backendStatus =
    document.getElementById("backendStatus");

const statusDescription =
    document.getElementById("statusDescription");

const apiMessage =
    document.getElementById("apiMessage");

const healthStatus =
    document.getElementById("healthStatus");

const healthText =
    document.getElementById("healthText");

const healthCircle =
    document.getElementById("healthCircle");

const lastCheck =
    document.getElementById("lastCheck");

const callApiButton =
    document.getElementById("callApiButton");

const healthButton =
    document.getElementById("healthButton");


// Hiển thị URL backend

apiUrl.textContent = API_URL;


// =============================
// GỌI API "/"
// =============================

async function callAPI() {

    apiMessage.textContent = "Đang tải...";

    try {

        const response =
            await fetch(`${API_URL}/`);

        if (!response.ok) {
            throw new Error("API lỗi");
        }

        const data =
            await response.json();

        apiMessage.textContent =
            JSON.stringify(data, null, 2);

    } catch (error) {

        console.error(error);

        apiMessage.textContent =
            "Không thể kết nối Backend";
    }
}


// =============================
// KIỂM TRA "/health"
// =============================

async function checkHealth() {

    // Trạng thái checking

    backendStatus.textContent =
        "Đang kiểm tra...";

    backendStatus.className =
        "status checking";

    healthStatus.textContent =
        "...";

    healthCircle.className =
        "health checking";

    healthText.textContent =
        "Checking";


    try {

        const response =
            await fetch(`${API_URL}/health`);

        if (!response.ok) {
            throw new Error("Health check failed");
        }

        const data =
            await response.json();


        if (data.status === "ok") {

            // Backend OK

            backendStatus.textContent =
                "Backend đang hoạt động";

            backendStatus.className =
                "status online";

            statusDescription.textContent =
                "API server đang phản hồi bình thường.";


            healthStatus.textContent =
                "OK";

            healthCircle.className =
                "health online";

            healthText.textContent =
                "Healthy";

            healthText.className =
                "online";

        } else {

            setOffline();

        }

    } catch (error) {

        console.error(error);

        setOffline();

    }


    // Thời gian kiểm tra

    lastCheck.textContent =
        new Date().toLocaleTimeString();
}


// =============================
// BACKEND OFFLINE
// =============================

function setOffline() {

    backendStatus.textContent =
        "Backend không khả dụng";

    backendStatus.className =
        "status offline";

    statusDescription.textContent =
        "Không thể kết nối đến API server.";


    healthStatus.textContent =
        "ERR";

    healthCircle.className =
        "health offline";

    healthText.textContent =
        "Offline";

    healthText.className =
        "offline";
}


// =============================
// BUTTON
// =============================

callApiButton.addEventListener(
    "click",
    callAPI
);


healthButton.addEventListener(
    "click",
    checkHealth
);


// =============================
// CHẠY KHI MỞ WEBSITE
// =============================

callAPI();

checkHealth();