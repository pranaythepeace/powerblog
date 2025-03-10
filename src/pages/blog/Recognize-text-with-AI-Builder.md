---
layout: ../../layouts/Layout.astro
isBlog: true
title: "Recognize text with AI Builder"
date: 2025-03-06
status: "completed"
---
<div class="blog-post-container">
<a href="/" class="back-link">&#x2715;</a>

# **🤖 Recognize Text with AI Builder**  
📅 **Published Date:** March 7, 2025 &nbsp;&nbsp; ✍ **Author:** Pranay Reddy Muthyala  

 ## **📌 Introduction**  
Extracting text from images and documents is a **common challenge in business automation**. AI Builder’s **Text Recognition model** in **Microsoft Power Platform** provides an easy way to scan, extract, and process text using **Optical Character Recognition (OCR)** technology.  

This blog post explores how AI Builder’s **Text Recognition model** can be used to **solve business problems, automate workflows with Power Automate, and build AI-powered applications in Power Apps**—all without requiring complex AI development.  

## **🧠 Understanding AI Builder’s Text Recognition Model**  

AI Builder’s **Text Recognition model** allows businesses to **digitize text from printed or handwritten documents** and integrate it into automated workflows.  

### 🔹 **Key Capabilities**  

✔ **Extracts printed and handwritten text** from images and PDFs.  
✔ **Processes structured and unstructured text** for automation.  
✔ **Seamlessly integrates with Power Automate and Power Apps**.  
✔ **Works with SharePoint, Dataverse, OneDrive, and more** for storage.  

## **🔍 Solving Business Problems with Text Recognition**  

AI-powered text extraction solves **manual data entry challenges** across various industries. Some real-world use cases include:  

### **1️⃣ Automating Data Entry from Forms**  
💡 **Problem:** Businesses rely on **paper-based forms** for registrations and surveys, requiring **manual data entry**.  
✅ **Solution:** AI Builder **extracts text automatically**, reducing human errors and processing time.  

### **2️⃣ Processing Invoices & Receipts in Finance**  
💡 **Problem:** Financial teams spend time **extracting invoice details manually**.  
✅ **Solution:** AI-powered text recognition **extracts invoice numbers, amounts, and vendor names automatically**.  

### **3️⃣ ID Verification & Document Processing**  
💡 **Problem:** Businesses manually process ID cards, passports, and contracts.  
✅ **Solution:** AI Builder scans IDs and **extracts key details for validation**, speeding up onboarding.  

### **4️⃣ Enhancing Searchability of Documents**  
💡 **Problem:** Scanned documents in SharePoint are **not searchable**.  
✅ **Solution:** AI Builder **converts text into structured data**, making document retrieval easier.  

By using AI Builder, businesses can **automate time-consuming processes and focus on high-value tasks**.  

## **🛠️ Automating Text Recognition with Power Automate**  

Manually extracting text from images can be **time-consuming and error-prone**. By integrating **AI Builder’s Text Recognition model** into **Power Automate**, businesses can **automate text extraction and processing**, ensuring a seamless workflow for handling invoices, forms, and other documents.  

📌 **Steps to Build a Power Automate Flow for Text Recognition:**  

1️⃣ **Create a New Flow in Power Automate** – Select a trigger like **“When a file is created in OneDrive”**.  

![Automate Cloud Flow](/images/RecognizetextwithAIBuilder/Automate-Cloud-Flow.webp)

![Workflow Creation](/images/RecognizetextwithAIBuilder/Workflow-Creation.webp)

2️⃣ **Add AI Builder’s Text Recognition Action** – Connect the **Predict > TextRecognition model** action with **File Content** in the Image file drop-down menu to extract text dynamically. 

![Full FLow Details](/images/RecognizetextwithAIBuilder/Full-Flow-Details.webp)

![Predict Model Action Details](/images/RecognizetextwithAIBuilder/Flow-Predict-Model-Action-Details.webp)

3️⃣ **Store the Extracted Text** – Save recognized text in **Dataverse, SharePoint, Excel, or SQL Database**.  

![Add A New Row Action](/images/RecognizetextwithAIBuilder/Add-A-New-Row-Action-Flow.webp)

4️⃣ **Notify Users (Optional)** – Use **Power Automate notifications or Teams messages** for real-time alerts.  
5️⃣ **Test & Deploy** – Run the flow with test images, verify accuracy, and enable automation.  

![Adding A Image To One Drive Folder](/images/RecognizetextwithAIBuilder/Adding-Image-To-One-Drive-Folder.webp)

![Flow Run Successful](/images/RecognizetextwithAIBuilder/Flow-Run-Successful.webp)

![Dataverse table updated with extracted text](/images/RecognizetextwithAIBuilder/Dataverse-Table-Extracted-Text.webp)

📌 **Real-World Use Cases for AI Builder in Power Automate:**  
✔ **Processing invoices automatically**.  
✔ **Extracting contract details for legal teams**.  
✔ **Digitizing handwritten notes into structured data**.  

## **📱 Building a Power Apps Application for Text Recognition**  

Power Apps allows users to **integrate AI Builder’s Text Recognition model** into applications for **real-time text extraction**.  

📌 **Steps to Build a Text Recognition App:**  

1️⃣ **Create a Canvas App** – Open **Power Apps Studio**, create a **Canvas app** from blank.  
2️⃣ **Insert AI Builder Component** – Go to **Insert > AI Builder > Text Recognizer**.  
3️⃣ **Configure Image Input** – Add a **Camera control** to capture text dynamically.  
4️⃣ **Display Extracted Text** – Insert a **Label** and set its value to:  
   ```PowerApps
   TextRecognizer1.Text
   ```  
5️⃣ **Test & Publish** – Capture images, extract text, and store it in **Dataverse or SharePoint**.  

📌 **Real-World Use Cases for AI Builder in Power Apps:**  
✔ **Scanning business cards into a CRM**.  
✔ **Extracting handwritten feedback in surveys**.  
✔ **Automating ID verification for onboarding**.  

## **📊 Benefits of AI Builder’s Text Recognition**  

✔ **Automates data entry** – Reduces manual work and increases productivity.  
✔ **Improves accuracy** – Extracts text with minimal errors.  
✔ **Speeds up processing** – Automates workflows, reducing delays.  
✔ **Enhances accessibility** – Converts printed text into digital format for easier access.  

By leveraging **AI-powered OCR technology**, businesses can **transform their document processing workflows, improve efficiency, and automate text extraction seamlessly**. 🚀  

---

🚀 **Stay tuned for more insights!**  📜 **<a href="https://learn.microsoft.com/api/achievements/share/en-us/PranayReddy-2029/3R98YRGH?sharingId=A727D40AB4961035" class="certificate-link">View My Completion Certificate</a>**  
</div>
