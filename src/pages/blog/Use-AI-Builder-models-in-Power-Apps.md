---
layout: ../../layouts/Layout.astro
title: "Use AI Builder models in Power Apps"
date: 2025-03-06
status: "completed"
---
<div class="blog-post-container">
<a href="/" class="back-link">&#x2715;</a>

# **🤖 Use AI Builder Models in Power Apps**  
📅 **Published Date:** March 6, 2025 &nbsp;&nbsp; ✍ **Author:** Pranay Reddy Muthyala  

## **📌 Introduction**  
Integrating **artificial intelligence (AI)** into business applications has become increasingly accessible, thanks to **Microsoft's AI Builder**. This platform empowers users to infuse AI capabilities into their **Power Apps** without requiring extensive coding or data science expertise. In this blog post, we'll explore how to leverage AI Builder models within Power Apps, covering both **prebuilt** and **custom** models, and how to integrate them into **canvas** and **model-driven** apps.  

## **🧠 Understanding AI Builder Models**  
AI Builder offers two primary types of models:  

### **🔹 Prebuilt Models**  
These are ready-to-use models designed for common business scenarios, such as:  
- **Business Card Reader** – Extracts contact information from business cards.  
- **Receipt Processing** – Extracts data from receipts.  
- **Text Recognition** – Identifies and extracts text from images.  

<br>

### **🔹 Custom Models**  
For more specific business needs, AI Builder allows users to train their own AI models:  
- **Prediction** – Predicts outcomes based on historical data.  
- **Form Processing** – Extracts data from structured documents.  
- **Object Detection** – Identifies and counts objects within images.  

<br>
Understanding these models helps in choosing the right AI solution for your organization.  

## **🛠️ Creating a Custom AI Model**  
To address unique business challenges, you might need to create a **custom AI model**. Here’s a step-by-step guide:  

1️⃣ **Access AI Builder** – Sign in to **Power Apps Studio** or **Power Automate Studio**, and navigate to **AI Hub > AI Models**.  

![Access AI Builder](/images/UseAIBuildermodelsinPowerApps/Access-AI-Builder.webp)

2️⃣ **Select a Model Type** – Choose a custom model type such as **Prediction**, **Category Classification**, or **Entity Extraction**. 

![Select Model Type](/images/UseAIBuildermodelsinPowerApps/Select-Model-Type-Category-Classification.webp) 

3️⃣ **Prepare Your Data** – Ensure you have relevant data for training the model. AI Builder provides sample datasets if needed.  

4️⃣ **Train the Model** – Upload data, label relevant fields, and train your AI model. 

![Select Text to Analyze](/images/UseAIBuildermodelsinPowerApps/Select-Text.webp)

![Select Tags](/images/UseAIBuildermodelsinPowerApps/Select-Tags.webp)

![Review Tags](/images/UseAIBuildermodelsinPowerApps/Review-Tags.webp)

![Train Your Model](/images/UseAIBuildermodelsinPowerApps/Train-Your-Model.webp)

![Model Training in Progress](/images/UseAIBuildermodelsinPowerApps/Model-Training-Progress.webp)
5️⃣ **Publish the Model** – Once trained, publish it so it can be used in Power Apps and Power Automate workflows. 
 
![Test Your Model](/images/UseAIBuildermodelsinPowerApps/Test-Your-Model.webp)

![Model Test Result](/images/UseAIBuildermodelsinPowerApps/Model-Test-Result.webp)

## **🔗 Integrating Prebuilt Models into Power Apps**  
Prebuilt models can be easily integrated into both **model-driven** and **canvas** apps:  

### **📌 Model-Driven Apps**  
1️⃣ Open **Form Designer** in your model-driven app.  
2️⃣ Add an **AI Component**, such as the **Business Card Reader**.  
3️⃣ Map the component to appropriate **table columns** where extracted data will be stored.  

### **📌 Canvas Apps**  
1️⃣ Insert an **AI Component** from the **AI Builder** section.  
2️⃣ Place it on the **canvas** and configure it to capture and display extracted data.  

## **🎨 Adding Custom AI Models to Canvas Apps**  
To use a **custom AI model** in a canvas app:  
![Model Usage](/images/UseAIBuildermodelsinPowerApps/Model-Usage.webp)
1️⃣ **Ensure Model Publication** – Confirm that your AI model has been **trained and published**.  
2️⃣ **Insert an AI Component** – In Power Apps Studio, go to **Insert > AI Builder**, and select the relevant model (e.g., **Object Detector**).  
3️⃣ **Configure Properties** – Set up **image inputs and display fields** to process documents and show results dynamically.  

This allows apps to **automate tasks** like **inventory tracking, form processing, and object detection**.  

## **📊 Benefits of Using AI Builder in Power Apps**  
✔ **Enhanced Efficiency** – Automates repetitive tasks, reducing manual effort.  
✔ **Improved Accuracy** – Minimizes human errors in data processing.  
✔ **Scalability** – Easily adapts AI models to evolving business needs.  

By integrating AI Builder models into Power Apps, organizations can **streamline operations and drive innovation** without the need for extensive coding or AI expertise. 🚀

---

🚀 **Stay tuned for more insights!**  📜 **<a href="https://learn.microsoft.com/api/achievements/share/en-us/PranayReddy-2029/KGEK5P5B?sharingId=A727D40AB4961035" class="certificate-link">View My Completion Certificate</a>**  
</div>
