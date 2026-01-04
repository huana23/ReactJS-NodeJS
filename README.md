# 🚀 MERN Fullstack Application

Ứng dụng fullstack sử dụng **React** cho frontend, **Node.js (Express)** cho backend và **MongoDB** cho cơ sở dữ liệu.  
Dự án được thiết kế theo mô hình **client–server**, dễ mở rộng, phù hợp cho học tập và phát triển sản phẩm thực tế.

---

## 📌 Mục tiêu dự án

- Xây dựng kiến trúc fullstack chuẩn công ty
- Tách biệt frontend và backend
- Kết nối REST API giữa React và Node.js
- Quản lý dữ liệu bằng MongoDB
- Dễ dàng deploy và mở rộng

---

## 🛠️ Công nghệ sử dụng

### Frontend
- React (Vite hoặc Create React App)
- Axios
- JavaScript (ES6+)
- HTML5, CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

### Công cụ & DevOps
- Git & GitHub
- npm
- concurrently
- Nodemon

---

## 📁 Cấu trúc thư mục

reactjs-nodejs/
├── backend/ # Backend (Node.js + Express)
│ ├── src/
│ │ ├── controllers/ # Xử lý logic
│ │ ├── models/ # Schema MongoDB
│ │ ├── routes/ # API routes
│ │ ├── config/ # Cấu hình DB
│ │ └── index.js # Entry point server
│ ├── .env # Biến môi trường
│ ├── package.json
│ └── node_modules/
│
├── frontend/ # Frontend (React)
│ ├── src/
│ │ ├── components/ # Component dùng chung
│ │ ├── pages/ # Các trang
│ │ ├── services/ # Gọi API
│ │ └── App.jsx
│ ├── package.json
│ └── node_modules/
│
├── package.json # Script chạy chung
├── .gitignore
└── README.md



---

## ⚙️ Yêu cầu hệ thống

- Node.js >= 18
- npm >= 9
- MongoDB (local hoặc MongoDB Atlas)

---

## 🔧 Cài đặt & cấu hình

### 1️⃣ Clone repository
```bash
git clone https://github.com/huana23/ReactJS-NodeJS
cd reactjs-nodejs


2️⃣ Cài đặt dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

Thư mục gốc
cd ..
npm install

3️⃣ Cấu hình biến môi trường (Backend)

📄 backend/.env

PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_db

▶️ Chạy ứng dụng
🔹 Chạy cả frontend và backend cùng lúc
npm run dev

🔹 Chạy riêng từng phần

Backend

cd backend
npm run dev


👉 Server chạy tại: http://localhost:5000

Frontend

cd frontend
npm run dev   # Vite
# hoặc
npm start     # CRA


👉 Frontend chạy tại: http://localhost:5173
 hoặc http://localhost:3000

🔗 Giao tiếp Frontend – Backend

Backend cung cấp REST API tại /api

Frontend gọi API thông qua Axios

Ví dụ:

axios.get("/api/users");


(Proxy đã được cấu hình để tránh lỗi CORS)

🧪 API mẫu
Method	Endpoint	Mô tả
GET	/api/hello	Test server
POST	/api/users	Tạo user
GET	/api/users	Lấy danh sách user
🧱 Kiến trúc & quy ước

MVC pattern (Model – Controller – Route)

Mỗi feature tách thành module riêng

Không commit node_modules

Biến môi trường dùng .env

Commit message rõ ràng

🚀 Định hướng phát triển

Authentication (JWT)

Authorization (Role-based)

Validation (Joi / Zod)

Docker

CI/CD

Deploy (Vercel + Render)

👤 Tác giả

Name: Huan

GitHub: https://github.com/huana23

📄 License

MIT License


---

## ✅ Sau khi tạo README
```bash
git add README.md
git commit -m "docs: add professional README"
git push