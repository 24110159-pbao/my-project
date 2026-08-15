⚡ CI/CD Dashboard
Dashboard kiểm tra trạng thái kết nối giữa Frontend và FastAPI Backend.
📁 Cấu trúc
```text
project/
├── backend/
│   └── main.py
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── tests/
│   └── test_backend.py
├── .github/
│   └── workflows/
│       └── ci.yml
├── requirements.txt
└── pytest.ini
```
🛠️ Công nghệ
Frontend: HTML, CSS, JavaScript
Backend: FastAPI
Testing: Pytest
CI: GitHub Actions
🚀 Chạy Backend
Cài dependencies:
pip install -r requirements.txt

Chạy FastAPI:
uvicorn backend.main:app --reload --port 8000

API:
GET /
GET /health

Swagger:
http://127.0.0.1:8000/docs

🖥️ Chạy Frontend
Mở:
frontend/index.html

Frontend được cấu hình để gọi Backend tại:
const API_URL = "http://127.0.0.1:8000";

🧪 Test
pytest

🌐 Demo Backend bằng Cloudflare Tunnel
cloudflared tunnel --url http://localhost:8000

Sau đó thay API_URL trong frontend/app.js bằng URL trycloudflare.com được cung cấp.

