# 🏠 Materials & Furniture Selection Assistant

## 📌 Project Overview

This project is a lightweight web application that allows users to configure a room by selecting materials and furniture, then generate a mock AI-assisted summary based on their selections.

The goal of this prototype is to demonstrate clean UI structure, responsive design, and simple rule-based logic that mimics AI-driven recommendations—without relying on external APIs or backend services.

---

## 🚀 Features

* **Room Selection**

  * Kitchen, Bathroom, Living Room, Bedroom, Laundry

* **Dynamic Options**

  * Each room provides relevant material and furniture selections

* **Live Summary**

  * Instantly updates as the user makes selections

* **Mock AI Summary**

  * Rule-based logic that evaluates:

    * Selected materials and furniture
    * Cost estimation (Low / Medium / High)
    * Design considerations
    * Missing selections
    * Recommended next steps

* **Responsive UI**

  * Optimized for both desktop and mobile devices

---

## 🛠️ Technologies Used

* **React (Vite)** – Frontend framework
* **Tailwind CSS** – Styling and responsive layout
* **JavaScript (ES6)** – Application logic
* **Vercel** – Deployment platform

---

## 📂 Project Structure

```
src/
├── components/
│   ├── RoomSelector.jsx
│   ├── OptionsSelector.jsx
│   ├── Summary.jsx
│   └── AISummary.jsx
│
├── data/
│   └── roomOptions.js
│
├── utils/
│   └── generateSummary.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/arnelbonifacio909/materials-furniture-selection-assistant
cd materials-furniture-selection-assistant
```

### 2. Install Dependencies

```
npm install
```

### 3. Run the Development Server

```
npm run dev
```

### 4. Open in Browser

```
http://localhost:5173
```

---

## 🌐 Deployment

This project is deployed using **Vercel**.

👉 Live Demo:
`https://materials-furniture-selection-assis.vercel.app/`

---

## 🧠 AI Summary Logic (Mocked)

The “Generate AI Summary” feature uses rule-based logic instead of a real AI API.

### Example Rules:

* **Cost Estimation**

  * Marble / Granite → High
  * Wood / Fabric → Medium
  * Laminate / Paint → Low

* **Design Warnings**

  * Dark flooring + dark walls → room may feel darker
  * Missing lighting → recommendation to add lighting

* **Completeness Check**

  * Detects unselected fields and highlights them

* **Recommendations**

  * Suggests improvements for balance and usability

---

## 🧪 Testing Instructions

1. Select a room type
2. Choose different materials or furniture options
3. Observe the live summary updating in real-time
4. Click **“Generate AI Summary”**
5. Verify:

   * Cost estimation adjusts correctly
   * Missing selections are identified
   * Design warnings appear when applicable

---

## ⚠️ Assumptions

* The application is a **prototype**, not a production-ready system
* Material and furniture options are **mock data**
* AI functionality is **simulated using rule-based logic**
* No persistence (data resets on refresh)

---

## 🔧 Limitations

* No backend or database
* No real AI integration
* Limited material/furniture options
* No user session or saved configurations

---

## 💡 Future Improvements

* Integrate real AI API (e.g., OpenAI)
* Add user authentication and saved designs
* Expand material and furniture catalog
* Add pricing calculations with real values
* Improve UI with animations and transitions
* Add image previews for selections

---
