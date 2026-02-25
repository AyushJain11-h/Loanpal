🚀 LoanPal – AI-Powered Loan Assistant
LoanPal is a modern, AI-powered personal loan platform that simplifies the loan application process using a chat-based interface, instant AI-driven decisions, and transparent feedback.

It helps users apply for loans, understand approval or rejection reasons, and download official loan sanction letters — all in one place.

🌟 Key Features
🤖 AI Loan Assistant
Conversational, chat-based loan application
Context-aware responses (not rigid form flows)
Understands user history and previous applications
⚡ Instant Loan Decisions
AI-based eligibility checks
Immediate approval / rejection / manual review
Clear rejection reasons with improvement guidance
📄 Sanction Letter Generation
Auto-generated PDF sanction letters
Downloadable anytime from the Profile page
Available for all approved loans
📊 Loan Application History
View all past applications
Status tracking: Approved / Rejected / Under Review
Detailed view with reasons and timestamps
🎨 Modern UI & UX
Fully responsive (mobile + desktop)
Dark / Light mode support
Smooth animations and clean layout
🔐 Secure & Reliable
Supabase authentication
Protected routes
User-specific data isolation
🧠 Tech Stack
Frontend
React + TypeScript
Vite
Tailwind CSS
shadcn/ui
Lucide Icons
Backend & Services
Supabase (Authentication & Database)
Edge Functions
AI-based decision logic
Utilities
jsPDF – PDF sanction letter generation
next-themes – Dark / Light mode
react-router-dom – Routing
📁 Project Structure
src/
├── components/
│   ├── chat/              # AI loan chatbot
│   ├── landing/           # Landing page sections
│   ├── ui/                # shadcn UI components
│   └── ThemeToggle.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Apply.tsx
│   ├── Profile.tsx
│   ├── Auth.tsx
│   └── Contact.tsx
│
├── hooks/
│   ├── useAuth.ts
│   └── useLoanChat.ts
│
├── lib/
│   ├── generateSanctionLetterPDF.ts
│   └── utils.ts
│
├── integrations/
│   └── supabase/
│
└── main.tsx
🔁 User Flow
User signs up or logs in using secure authentication
User applies for a loan via the AI-powered chatbot
AI evaluates loan details and eligibility
User receives one of the following outcomes:
✅ Approved → Sanction letter is generated
❌ Rejected → Clear rejection reason is shown
Users can download the sanction letter anytime
All applications are visible in Profile → Loan History
🔐 Authentication & Security
Supabase email/password authentication
Protected routes (Apply, Profile)
Data accessible only to authenticated users
User-specific data isolation
📄 Sanction Letter (PDF)
Auto-generated upon loan approval
Contains:
Loan amount
EMI
Interest rate
Tenure
Validity date
Downloadable anytime from the Profile page
🧪 Setup & Run Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/loanpal.git
cd loanpal
###2️⃣ Install dependencies

npm install
###3️⃣ Setup environment variables

Create a .env file in the root directory:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
###4️⃣ Run the application

npm run dev
📌 Future Enhancements
1) Admin dashboard

2) Multi-bank loan offers

3) EMI calculator

4) WhatsApp / Email notifications

5) Credit score integration

6) Support ticket system

