# Arduino Serial Flask App - GUI Interaction

## 🚀 Overview
This project is a **Flask-based web application** that allows users to control an **Arduino** via a **serial connection**. The GUI provides interactive buttons to control LEDs or other components.

## 📌 Features
- **Web-based GUI** for controlling Arduino.
- **Flask Server** handles requests & communicates via Serial.
- **Arduino Serial Communication** using `pyserial`.
- **Interactive Buttons** for LED toggling.
---

## 🛠 Installation & Setup

### 1️⃣ Install Dependencies
Ensure Python and Flask are installed:
```sh
pip install flask pyserial
```

### 2️⃣ Connect Arduino to PC
- Upload the Arduino sketch (`arduino_code.ino`) using the **Arduino IDE**.
- Check the **COM Port** in `Device Manager` (Windows) or `ls /dev/tty*` (Linux/Mac).

### 3️⃣ Run the Flask Server
Modify the serial port in `app.py`, then start the server:
```sh
python app.py
```
The web app will be available at:
🔗 **http://127.0.0.1:5000/**

---


---

## 🎮 Usage
1️⃣ Open **http://127.0.0.1:5000/** in your browser.  
2️⃣ Click buttons to send commands to Arduino.  
3️⃣ Arduino executes the received commands (e.g., toggles LEDs).  

---
