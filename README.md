# 🚀 Fullstack Web Application (NestJS + React)

Dự án Fullstack Web App sử dụng **NestJS** cho Backend và **React + Vite** cho Frontend, kết nối với cơ sở dữ liệu **MongoDB**.

## 🌐 Live Demo

- **Frontend:** [https://ia-03-user-registration-ap-iwith-re.vercel.app](https://ia-03-user-registration-ap-iwith-re.vercel.app)
- **Backend API:** [https://ia03-userregistrationapiwithreactfrontend.onrender.com](https://ia03-userregistrationapiwithreactfrontend.onrender.com)

## 🛠 Công nghệ sử dụng (Tech Stack)

### Frontend
- React  
- TypeScript  
- Vite  
- Axios  
- CSS

### Backend
- NestJS  
- TypeScript  
- Mongoose

### Database
- MongoDB Atlas / Local

---

# 💻 Hướng dẫn chạy toàn bộ dự án (Local hoặc Live)

## 1️⃣ Chuẩn bị (Prerequisites)

- Node.js  
- MongoDB (local) hoặc MongoDB Atlas

---

## 2️⃣ Cài đặt Backend (NestJS)

### Bước 1: Cài đặt dependencies
```bash
cd backend
npm install
```

### Bước 2: Tạo file `.env` trong thư mục `backend` (đã tạo sẳn)
```env
# Khi chạy trên server / live (Atlas)
MONGO_URL=mongodb+srv://phong_db_user:96g8eHwFs3XxRK6p@cluster0.yzzcqmh.mongodb.net/?appName=Cluster0

# Khi chạy local
MONGO_LOCAL_URL=mongodb://localhost:27017/ia03-user-db

PORT=3000
```

> ⚠️ Lưu ý:
> - Nếu chạy local, **phải đảm bảo MongoDB local đang chạy** (mongod service active).
> - Nếu muốn dùng Atlas (global), không cần chạy Mongo local.

### Bước 3: Cấu hình kết nối Mongoose trong `app.module.ts`
- Mở file `backend/src/app.module.ts`
- Sửa dòng kết nối Mongoose tùy môi trường(line 7):
```ts
// Sử dụng local MongoDB
MongooseModule.forRoot(process.env.MONGO_LOCAL_URL as string),

// Hoặc dùng Atlas
 MongooseModule.forRoot(process.env.MONGO_URL as string),
```

### Bước 4: Chạy Backend
```bash
npm run start:dev
```
- Backend sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

---

## 3️⃣ Cài đặt Frontend (React + Vite)

### Bước 1: Cài đặt dependencies
```bash
cd frontend
npm install
```

### Bước 2: Kiểm tra API endpoint
- Mở file `frontend/src/pages/SignUp.tsx`
- Đảm bảo API endpoint trỏ đến backend:
```ts
// Khi chạy local
const localLink = 'http://localhost:3000/register';
Ở line 13: const response = await axios.post(localLink, data);

// Khi chạy live
const globalLink = 'https://ia03-userregistrationapiwithreactfrontend.onrender.com/register';
Ở line 13: const response = await axios.post(globalLink, data);
```

### Bước 3: Chạy Frontend
```bash
npm run dev
```
- Frontend sẽ chạy tại: [http://localhost:5173](http://localhost:5173)

---

## ✔️ Tóm tắt nhanh

| Thành phần                 | Lệnh chạy            | URL                        |
|----------------------------|--------------------|----------------------------|
| **Backend (NestJS)**       | `npm run start:dev` | http://localhost:3000      |
| **Frontend (React + Vite)**| `npm run dev`       | http://localhost:5173      |

---


