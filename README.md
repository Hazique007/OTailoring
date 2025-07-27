
# 👔 Apna Darzi – Custom Tailoring Service Platform

Apna Darzi is a full-stack web application built using the **MERN stack** that streamlines custom clothing orders, measurements, and appointments between customers and tailors. Whether you're getting a suit stitched or adjusting your favorite dress, Tailorin simplifies the process with intuitive interfaces, role-based dashboards, and real-time tracking.

---

## 🌟 Features

- 🧍‍♂️ **Customer Dashboard**
  - Place orders by submitting measurements and design references.
  - Choose clothing type, fabric, style, and preferred delivery timeline.
  - Track order status (Received → In Progress → Ready → Delivered).

- 🧵 **Tailor/Admin Dashboard**
  - View incoming orders, customer measurements, and design preferences.
  - Update order status, manage appointments, and communicate with users.

- 📅 **Appointment Booking**
  - Book pickup or fitting appointments through a calendar view.
  - Tailors receive booking requests in real-time.

- 📷 **Image Upload Support**
  - Customers can upload reference images for designs or measurements.
  - Images are stored using Cloudinary (or similar cloud storage).

- 📧 **Email Notifications** *(Optional)*
  - Customers are notified when their order progresses to the next stage.

---

## 🧱 Tech Stack

| Layer     | Tech Used                          |
|-----------|------------------------------------|
| Frontend  | React.js, TailwindCSS, React Router |
| Backend   | Node.js, Express.js                |
| Database  | MongoDB (Mongoose)                 |
| File Upload | Multer   |
| Auth      | Twilio                      |

```bash
git clone https://github.com/yourusername/tailorin-app.git
cd tailorin-app
```

### 🖥️ 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url # optional
```

Start the server:

```bash
npm run dev
```

### 🌐 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Visit: `http://localhost:3000`

---

## 📈 Key Highlights

- Managed **30+ user measurements and custom orders** using a flexible MongoDB schema.
- Achieved **95% form completion rate** with user-friendly measurement and image upload UI.
- Enabled role-based dashboards for **tailors and customers** to streamline workflow.
- Deployed the app on Render and Hosted on Google Play Store.

---

## 🔗 Live Demo

> Coming soon: [your-live-link.vercel.app](https://your-live-link.vercel.app)
