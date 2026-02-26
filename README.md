# 🚀 **LoanPal – AI-Powered Loan Assistant**

**LoanPal** is a modern, AI-powered personal loan platform that simplifies the loan application process using a **chat-based interface**, **instant AI-driven decisions**, and **transparent feedback**.

It helps users apply for loans, understand approval or rejection reasons, and download official **loan sanction letters** — all in one place.

---

## 🌟 **Key Features**

### 🤖 **AI Loan Assistant**
- Conversational, chat-based loan application  
- Context-aware responses (not rigid form flows)  
- Understands user history and previous applications  

### ⚡ **Instant Loan Decisions**
- AI-based eligibility checks  
- Immediate **approval / rejection / manual review**  
- Clear rejection reasons with improvement guidance  

### 📄 **Sanction Letter Generation**
- Auto-generated **PDF sanction letters**  
- Downloadable anytime from the **Profile** page  
- Available for all approved loans  

### 📊 **Loan Application History**
- View all past applications  
- Status tracking: **Approved / Rejected / Under Review**  
- Detailed view with reasons and timestamps  

### 🎨 **Modern UI & UX**
- Fully responsive (mobile + desktop)  
- Dark / Light mode support  
- Smooth animations and clean layout  

### 🔐 **Secure & Reliable**
- Supabase authentication  
- Protected routes  
- User-specific data isolation  

---

## 🧠 **Tech Stack**

### **Frontend**
- React + TypeScript  
- Vite  
- Tailwind CSS  
- shadcn/ui  
- Lucide Icons  

### **Backend & Services**
- Supabase (Authentication & Database)  
- Edge Functions  
- AI-based decision logic  

### **Utilities**
- jsPDF – PDF sanction letter generation  
- next-themes – Dark / Light mode  
- react-router-dom – Routing  

---

## 📁 **Project Structure**

```text
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

