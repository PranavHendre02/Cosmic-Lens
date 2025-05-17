# 🌌 Cosmic Lens

Explore the cosmos through NASA's lens! Cosmic Lens is a **responsive web application** built using **HTML, JavaScript, and Tailwind CSS**. It allows users to interact with two of NASA's fascinating APIs: **Mars Rover Photos** and **Astronomy Picture of the Day (APOD)**. With a clean UI, modern design, and responsive layout, it brings the wonders of space closer to you.

---

## 🔍 Features

* 🛰 **Mars Rover Photos**

  * View images captured by **Curiosity**, **Spirit**, or **Opportunity** rovers.
  * Filter by a specific **Earth date**.

* 🌌 **Astronomy Picture of the Day (APOD)**

  * Automatically fetches the **latest NASA-curated image or video**.
  * Displays the **title** and a brief **explanation**.

* 📊 **Responsive Design**

  * Fully optimized layout for all screen sizes.
  * Mobile-first experience with a **hamburger menu** for navigation.

* 🔄 **Interactive UI**

  * Centered forms, responsive image grid, hover underline effects, and elegant transitions.

* ❌ **No External CSS Files**

  * Styling is managed using **Tailwind CSS via CDN** and inline `<style>` for custom animations.

---

## 🧩 Technologies Used

### 🧱 HTML

* Structure of the web pages
* Semantic tags for accessibility and SEO

### 🎯 JavaScript

* Fetch API to interact with NASA APIs
* DOM manipulation to display images dynamically
* Event handling for form submission and hamburger menu toggle

### 🎨 Tailwind CSS

* CDN-based utility-first CSS framework
* Responsive grid layout for image gallery
* Custom styles for hover effects, transparency, and blur effects (navbar/footer)

```html
<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>
```

```javascript
// Sample Fetch from APOD API
fetch(`https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("explanation").textContent = data.explanation;
    document.getElementById("media").src = data.url;
  });
```

---

## 📊 NASA APIs Used

### 🚀 Mars Rover Photos API

* **Endpoint:** `https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos`
* **Parameters:** `earth_date`, `api_key`

### 🌟 Astronomy Picture of the Day (APOD) API

* **Endpoint:** `https://api.nasa.gov/planetary/apod`
* **Parameters:** `api_key`

> **API Key Used:** `8ZWsWRhe6Bi9cV0LsGtkdVblkTAIYJpincIqeoM9` (Replace with your own key if needed.)

---

## 📖 How It Works

### 📸 Mars Rover Photos (index.html)

1. User selects a rover and Earth date.
2. Clicks the **"Send"** button.
3. Fetches and displays photos in a responsive gallery.
4. Alerts user if no photos are found.

### 📰 APOD (apod.html)

* Loads the **daily image or video**, its **title**, and **description** on page load.

### ℹ️ About (about.html)

* Shares project and rover background information.

### 🗺️ Navigation

* Fixed, transparent navbar with backdrop blur.
* Hover underline effects.
* Mobile hamburger menu for responsive navigation.

### © Footer

* Transparent, backdrop-blurred footer.
* Hover underline on copyright.

---

## 📂 Directory Structure

```
CosmicLens/
├── index.html        # Mars Rover Photos page
├── check.js          # JS for Mars Rover API
├── apod.html         # APOD page
├── apod.js           # JS for APOD API
├── about.html        # Static About page
└── README.md         # Documentation
```

---

## 🌐 Getting Started

### 🚪 Prerequisites

* Modern browser (Chrome, Firefox, Edge, etc.)
* Active internet connection
* A valid NASA API key

### 📅 Setup

1. Clone the repo:

```bash
git clone https://github.com/PranavHendre02/Cosmic-Lens.git
```

2. Open `index.html` in a web browser.
3. Use navbar links to access other pages (`apod.html`, `about.html`).

### 🔹 Usage Instructions

* **Mars Rover Photos:** Choose rover, date, and click "Send" to view images.
* **APOD:** Automatically displays the latest astronomy media and description.
* **Responsive Menu:** Tap the hamburger icon on small screens for navigation links.

---

## ✅ Notes

* **Responsive:** Adjusts from 1 to 4-column layout based on screen size.
* **Browser Support:** Backdrop-filter requires modern browsers.
* **API Rate Limit:** 1000 requests/hour (per API key).
* **Extensible:** Add rover date validation, date range filters, or use more NASA APIs.

---

## 👥 Acknowledgments

* **NASA APIs** for image data.
* **Tailwind CSS** for modern UI.
* **Icons8** for logo design.

---

## 📄 License

For educational use only. Compliant with [NASA's API terms](https://api.nasa.gov/).

---

## 📅 Created By

**[Pranav Hendre](https://github.com/PranavHendre02)** 
