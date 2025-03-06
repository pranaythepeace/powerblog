---
layout: ../../layouts/Layout.astro
title: "Automate the processing of documents with the AI Builder prepackaged solution"
date: 2025-03-05
status: "completed"
---
<div class="blog-post-container">
<a href="/" class="back-link">&#x2715;</a>

# **📄 Automate Document Processing with AI Builder's Prepackaged Solution**  
📅 **Published Date:** March 5, 2025 &nbsp;&nbsp; ✍ **Author:** Pranay Reddy Muthyala  

## **📌 Introduction**  
Processing large volumes of documents manually is **slow, error-prone, and inefficient**. Businesses dealing with **invoices, contracts, and other structured documents** often struggle with delays and data inconsistencies. **AI Builder’s Document Automation Solution** in Microsoft Power Platform simplifies this by leveraging **AI and automation** to **extract, process, and validate document data with minimal human intervention**.  

In this blog, we will walk through the process of setting up AI Builder’s document automation solution, covering installation, configuration of AI models for data extraction, and how to monitor and review processed documents for accuracy.  

## **🔧 Installing the Document Automation Base Kit**  
To start automating document processing, we first need to install the **Document Automation Base Kit**, which includes Power Automate flows, a Power App, and Dataverse tables.  

### **🛠️ Prerequisites:**  
- **Access to Power Automate and AI Builder**.  
- **Service Mailbox** (Outlook email) for document intake.  
- **Admin privileges** to configure Power Automate connections.  

<br>

### **🚀 Installation Steps:**  
1️⃣ **Navigate to AI Builder** in Power Automate.  
2️⃣ Select **Document Automation** and choose **Custom documents and invoices**.  
3️⃣ Click **Install solution** and wait **5-10 minutes** for the installation to complete.  
4️⃣ Configure **Dataverse and Office 365 Outlook** connections.  

![Custom Document Solution](/images/AutomatetheprocessingofdocumentswiththeAIBuilderprepackagedsolution/Custom-Document-Automation-Solution.webp)
## **⚙️ Configuring the Document Automation Solution**  
Once installed, the solution must be configured to **extract relevant data from documents** and integrate with business workflows.  

### **🔹 Assigning Roles:**  
- **Manual Reviewers** – Validate extracted data.  
- **Process Owners** – Manage workflows and oversee automation.  

To assign roles, navigate to **Power Platform Admin Center > Environments > Desired Environment > Settings > Users > Manage Security Roles** and select the appropriate permissions.  

![Manage Security Roles](/images/AutomatetheprocessingofdocumentswiththeAIBuilderprepackagedsolution/Manage-Security-Roles.webp)
### **🧠 Training a Form Processing Model:**  
1️⃣ Open **AI Builder** and select **Create a Form Processing Model**.  
2️⃣ Upload at least **5 sample documents** with similar formatting.  
3️⃣ Define **fields** to extract (e.g., Invoice Number, Amount, Date).  
4️⃣ Train and **publish the model** for use in automation flows.  

### **📩 Customizing Email Processing (Optional):**  
- Modify the **Document Automation Email Importer** flow in Power Automate.  
- Set conditions to **filter** and **prioritize** specific documents.  

## **📊 Monitoring & Reviewing Processed Documents**  
Once documents are processed, it’s essential to **review and validate** the extracted data to ensure accuracy.  

### **🔍 Validator’s Role:**  
1️⃣ Open the **Document Automation Application** in Power Apps.  
2️⃣ Review assigned documents and **verify extracted fields**.  
3️⃣ Correct any errors and click **Validate** to confirm changes.  

### **👨‍💻 Administrator’s Oversight:**  
- Monitor all processed documents for errors.  
- Identify patterns where AI model improvements are needed.  
- Retrain AI models with new document samples.  

<br> 

### **📤 Exporting Processed Data:**  
- Open **Dataverse > Document Automation Data Table**.  
- Click **Export** and choose your preferred format (Excel, CSV).  

## **💡 Final Thoughts**  
AI Builder’s **Document Automation Solution** eliminates tedious manual data entry and streamlines business workflows. With AI-powered **data extraction, human validation, and automation**, companies can save **hours of work, improve accuracy, and scale operations efficiently**.  

---

🚀 **Stay tuned for more insights!**  📜 **<a href="https://learn.microsoft.com/api/achievements/share/en-us/PranayReddy-2029/87ULEACW?sharingId=A727D40AB4961035" class="certificate-link">View My Completion Certificate</a>**  
</div>

