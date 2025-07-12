# time-capsule-social-media
A blockchain-backed digital platform for scheduling and securely sharing future messages, media, and memories.

---

## 🧠 Overview

**Time Capsule Social Media** is an innovative digital application that allows users to store and schedule personal digital content—such as messages, images, and videos—to be delivered at a specified future time or milestone. The system ensures authenticity, privacy, and user control through blockchain technology, making it ideal for legacy storytelling, future events, and meaningful memory sharing.

> 📜 Patent Application No: **20254104949 A**  
> 📅 Date of Publication: **30/05/2025**  
> 🧑‍💻 Inventor: **Afreed Pasha & Team, SR University**

---

## 🚀 Features

- 📅 **Scheduled Delivery**: Set a future date or life event to automatically deliver digital content.
- 🔐 **Blockchain Authentication**: Ensures data authenticity, timestamping, and tamper resistance.
- 🖼️ **Multimedia Support**: Save text, images, videos, and audio securely.
- 👤 **User Control**: Define access, lock/unlock policies, and delivery conditions.
- 📲 **Web Interface + Smart Contract**: Simple interface + Solidity-backed storage logic.

---

## 📁 Folder Structure

time-capsule-social/
├── backend/
│ ├── api.py # FastAPI server
│ ├── blockchain.py # Blockchain simulation
│ └── scheduler.py # Content scheduler logic
│
├── frontend/
│ └── src/
│ └── App.js # React frontend for users
│
├── smart_contract/
│ └── TimeCapsule.sol # Solidity smart contract
│
├── requirements.txt
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation & Usage

### Backend (Python + FastAPI)

```bash
cd backend
pip install -r ../requirements.txt
uvicorn api:app --reload
Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Smart Contract (Solidity)
Deploy TimeCapsule.sol using Remix IDE or Hardhat.

🛡️ Privacy & Security
Encrypted storage simulation with access control

Future expansion: wallet authentication, zk-proofs

No centralized access to content — only owner-defined unlock triggers

📦 Dependencies
fastapi

uvicorn

pydantic

react

solidity (for smart contracts)

🧪 Example Capsule JSON
json
Copy
Edit
{
  "recipient": "afreed@example.com",
  "message": "Happy 30th Birthday! This is a letter from your past self.",
  "unlock_date": "2030-06-20T00:00:00Z"
}
