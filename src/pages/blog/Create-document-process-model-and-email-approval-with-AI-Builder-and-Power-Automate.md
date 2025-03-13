---
layout: ../../layouts/Layout.astro
isBlog: true
title: "Create document process model and email approval with AI Builder and Power Automate"
date: 2025-03-13
status: "completed"
---
<div class="blog-post-container">
<a href="/" class="back-link">&#x2715;</a>

# **🛠️ Create document process model and email approval with AI Builder and Power Automate**  
📅 **Published Date:** March 13, 2025 &nbsp;&nbsp; ✍ **Author:** Pranay Reddy Muthyala  

## 📌 Introduction  

Invoice processing is a repetitive and time-consuming task in most organizations. Manual data extraction, verification, and approval workflows often result in **delays, errors, and inefficiencies**. In this Post, I’ll walk you through how to **automate invoice processing and approval workflows** using **AI Builder** and **Power Automate**.  

## 🏢 Business Scenario  

Imagine you work as a **Power Platform consultant** at a **Organization**. The Organization processes a large volume of **vendor invoices manually**. The current workflow involves:  

- Receiving invoices in **different formats (PDF, JPG, PNG)**.  
- **Employees printing invoices** and manually recording details.  
- **Managers physically reviewing invoices** and signing approvals.  

This **paper-based approach** leads to:  
❌ **Processing delays** due to dependency on manual work.  
❌ **Human errors** when recording invoice amounts and vendor details.  
❌ **Lack of tracking and visibility** into pending approvals.  

### 🚀 The Solution: **AI-Driven Invoice Processing & Approval**
To improve efficiency, we’ll implement:  
✅ **AI Builder** to extract structured invoice data automatically.  
✅ **Power Automate** to trigger an **approval workflow via email**.  
✅ **Seamless approval tracking** for finance teams.  

# 🛠 Step-by-Step Implementation  

## **1️⃣ Preparing the Environment**  

Before building the solution, we need:  
✔ **Microsoft Power Apps** and **Power Automate** licenses.  
✔ **AI Builder** (part of Power Platform) for model creation.  
✔ **Microsoft Dataverse** to store structured invoice data.  

### **🔧 Setup Steps**  
1️⃣ **Sign in to Power Automate** at [make.powerautomate.com](https://make.powerautomate.com/).  
2️⃣ **Enable AI Builder** in your environment.  
3️⃣ **Download sample invoices** (PDF, PNG, JPG formats) for training.  

## **2️⃣ Creating an Invoice Processing Model in AI Builder**  

Now that we have set up the environment, the next step is to **create an AI model in AI Builder** to automatically extract invoice details such as **Invoice Number, Vendor Name, Date, and Total Amount**.

### **📌 Steps to Build the Invoice Processing Model**

#### **1️⃣ Sign in to AI Builder**
1. Navigate to **[Power Automate](https://make.powerautomate.com/)**.
2. In the left navigation pane, select **AI Hub** → **AI Models**.  
   - If **AI Hub** is not visible, click **More** and select it from the expanded menu.
   ![PowerAutomatePortal](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/PowerAutomatePortal.webp)

   - Click **AI Models**, then select **Extract customer information from documents**.
   ![ChooseModel](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/ChooseAICustomModel.webp)
   - Click **Create custom model**.
   ![ChooseModel](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/CustomModelCreation.webp)

<br>

#### **2️⃣ Define the Document Type**
1. On the **Select the type of document your model will process** screen, select **Fixed template documents** and Click **Next**.
![ChooseDocumentType](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/ChooseDocumenttype.webp)

<br>

#### **3️⃣ Add Fields to Extract Invoice Information**
1. On the **Choose information to extract** screen, click **Add**.
   - Select **Text Field**, then click **Next**.
   ![ChooseInformationToExtract](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/ChooseInformationToExtract.webp)

   - Set the **Name** field to `Account`, then click **Done`.
   ![AccountTextField](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/AccountTextField.webp)

2. Repeat Steps **1-3** to add the following **Text Fields**.
  - `StreetAddress`
  - `State`
  - `PostalCode`
  - `InvoiceNum`
3. Click the **Add** drop-down and select **Date Field**.
- Set the **Name** to `InvoiceDate` and choose the format `Year-Month-Day`, then click **Done**.
4. Click the **Add** drop-down again and select **Number Field**.
- Set the **Name** to `TotalAmt` and choose **Use dot (.) as decimal separator**, then click **Done**.

<br>

#### **4️⃣ Add Table for Line Items**
Invoices often contain multiple line items. We need to extract **Quantity, Description, Unit Price, and Line Total** for each invoice.
1. Click the **Add** drop-down and select **Table**.
   - Name the table **LineItems**.
2. Click **Column 1**, then select **Edit Column**.
   - Rename it to `Qty` and set **Type** to `Number`, then click **Confirm**.
5. Click **New Column**:
   - Set **Name** to `Description`, **Type** to `Text`, then click **Add**.
6. Click **New Column** again:
   - Set **Name** to `Unit Price`, **Type** to `Number`, then click **Add**.
7. Click **New Column** one more time:
   - Set **Name** to `Line Total`, **Type** to `Number`, then click **Add**.
   - Click **Done**.
![TableForData](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/TableForData.webp)
Your completed table should now be configured to extract **line items dynamically**.

<br>

#### **5️⃣ Upload Training Documents**
  - Click **Next** to proceed to the **Add collections of documents** screen.
  - Click **New collection**.
  - Click the **+** button on **Collection 1**.
  - Click **Add Documents**.
![AddCollectionsofDocuments](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/AddCollectionsofDocuments.webp)
  - Select **My Device**, then locate and upload your **5 sample invoice files**.
  - Click **Upload 5 documents**, then click **Done**.
![DocumentsUploadtoTrain](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/DocumentsUploadtoTrain.webp)

<br>

#### **6️⃣ Tag Documents for AI Training**
1. On the **Tag documents** screen, manually **highlight and tag fields** in the invoice preview.
2. Drag a rectangle around each field and assign the correct **Tag**:
   - **Account Name:** `Adatum Corporation`
   - **Street Address:** `234 France Ave`
   - **State:** `WA`
   - **Postal Code:** `76328`
   - **Invoice Number:** `1783` (or similar)
   - **Invoice Date:** `Oct 23, 2016`
   - **Total Amount:** `90.20`
   ![TagDocuments](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/TagDocuments.webp)
3. Drag a rectangle around the **table section** and tag it as **LineItems**.
   - If prompted with a **table selection wizard**, click **Close**.
   - Click under each table row to mark it as **a new row**.
   - Click the **A** button above `QUANTITY` and select the **Qty tag**.
   - Repeat the process for **DESCRIPTION, UNIT PRICE, and LINE TOTAL**.

<br>

✅ **You must repeat this tagging process for all 5 training documents.**  
📌 Once a document is **fully tagged**, a ✅ checkmark will appear on it.

#### **7️⃣ Train & Publish the Model**
1. Click **Next** after tagging all documents.
 ![ModelSummary](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/ModelSummary.webp)

2. On the **Model Summary** screen, click **Train**.
   - 🚀 **Training may take several minutes**.
   
![ModelTraining](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/ModelTraining.webp)

3. Once training is **complete**, click **Publish** to make the model available for use.
 ![PublishModel](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/PublishModel.webp)

## **📌 Steps to Build Approval Flow**
### **1️⃣ Create a New Automated Flow in Power Automate**

1. **Sign in to Power Automate**: 
   - Navigate to the [Power Automate portal](https://make.powerautomate.com/).
2. **Initiate a New Flow**:
   - Click on **Create** in the left-hand menu.
   - Select **Automated Cloud Flow**.
![PowerAutomatePortalScreen](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/PowerAutomatePortalScreen.webp)

<br>

3. **Configure the Flow**:
   - **Name**: Enter a descriptive name, such as "Invoice Approval Flow".
   - **Trigger**: Search for and select **When a new email arrives (V3)**.
![AutomatedCloudFlowCreation](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/AutomatedCloudFlowCreation.webp)

<br>

### **2️⃣ Set Up the Email Trigger Conditions**

1. **Specify Email Parameters**:

   - **Include Attachments**: Set to **Yes** to ensure only emails with attachments trigger the flow.
   - **Subject Filter**: Enter keywords like "New Invoice" to filter relevant emails.

<br>

### **3️⃣ Integrate AI Builder's Invoice Processing Model**

1. **Add AI Builder Action**:
   - Click on **+ New Step**.
   - Search for **AI Builder** and select **Predict**.

2. **Configure the Predict Action**:
   - **Model**: Choose your pre-trained **Invoice Processor** model.
   - **Document Type**: Set to the attachment's content type from the email.
   - **Document**: Use the attachment's content from the email.
![PredictModelChoose](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/PredictModelChoose.webp)

<br>

### **4️⃣ Extract and Utilize Invoice Data**

1. **Retrieve Key Fields**:

     - From the AI Builder's output, extract essential fields such as:
     - **Account**: Vendor or client's name.
     - **Invoice Number**: Unique identifier of the invoice.
     - **Invoice Date**: Date when the invoice was issued.
     - **Total Amount**: Total payable amount.

<br>

### **5️⃣ Send Approval Email**

1. **Add Approval Action**:
   - Click on **+ New Step**.
   - Search for **Outlook** and select **Send email with options**.

2. **Configure the Approval Email**:
   - **To**: Enter the approver's email address.
   - **Subject**: Use dynamic content to personalize, e.g., "Invoice [Invoice Number] from [Account] requires your approval".
   - **Body**: Provide details extracted from the invoice:
     - Vendor: [Account]
     - Invoice Number: [Invoice Number]
     - Invoice Date: [Invoice Date]
     - Total Amount: [Total Amount]
   - **User Options**: Set choices to **Approve** and **Reject**.
![SendEmailAfterProcessing](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/SendEmailAfterprocessing.webp)

<br>

![SendingInvoiceEmailForProcessing](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/SendingInvoiceEmailForProcessing.webp)

![Flow-Run-Successful](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/Flow-Run-Successful.webp)

![ApprovalEmail](/images/CreatedocumentprocessmodelandemailapprovalwithAIBuilderandPowerAutomate/ApprovalEmail.webp)

## **📊 Real-World Impact of AI-Based Invoice Processing**  

This **AI-driven workflow** significantly enhances **efficiency, accuracy, and compliance**:  

💡 **Before Automation:**  
- Manual invoice tracking using spreadsheets.  
- Human errors in data entry leading to **financial mismatches**.  
- Delays due to **physical document approvals**.  

🚀 **After AI Implementation:**  
✅ **Faster invoice approvals** (reduced from days to minutes).  
✅ **100% automated invoice data extraction** using AI Builder.  
✅ **Seamless email-based approvals**, improving financial workflows.  

## **🌟 Key Benefits**  
✔ **📑 Eliminates Paper-Based Processes** – AI extracts key invoice details from scanned or digital copies.  
✔ **⚡ Speeds Up Approvals** – Automatic email routing ensures quick decision-making.  
✔ **🔎 Improves Accuracy** – AI reduces human errors in invoice verification.  
✔ **🔗 Scalable Solution** – Works with **Dataverse, SharePoint, or external ERP systems**.  

## 🎯 **Conclusion & Next Steps**  

By leveraging **AI Builder and Power Automate**, organizations can **reduce invoice processing time, minimize errors, and improve financial workflows**. 

---

🚀 **Stay tuned for more insights!**  📜 **<a href="https://learn.microsoft.com/en-us/users/pranayreddy-2029/achievements/yqfmc72r" class="certificate-link">View My Completion Certificate</a>**  
</div>

