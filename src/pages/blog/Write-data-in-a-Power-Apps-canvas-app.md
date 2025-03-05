---
layout: ../../layouts/Layout.astro
title: "Write data in a Power Apps canvas app"
date: 2025-03-04
status: "completed"
---
<div class="blog-post-container">
<a href="/" class="back-link">&#x2715;</a>

# **📝 Write Data in a Power Apps Canvas App**  
📅 **Published Date:** March 4, 2025 &nbsp;&nbsp; ✍ **Author:** Pranay Reddy Muthyala  

## **📌 Introduction**  
Collecting and managing data is at the core of **business applications**, and Power Apps **Canvas Apps** provide a powerful way to **write, edit, and submit data** efficiently. Using **forms, input controls, and Power Fx functions**, we can create **seamless user experiences** for data entry.  

In this blog, we’ll cover how to use forms in a Canvas App to capture and update data, explore different form modes, customize forms to match business needs, and handle form submissions effectively. We’ll also introduce special properties that help manage form behavior and improve the user experience. 

## **📜 Introduction to Forms in Power Apps**  

Power Apps provides a built-in **Edit Form Control**, which allows users to **view, create, and update records**. Forms are connected to a **data source** (like **Dataverse, SharePoint, or SQL Server**) to ensure **real-time updates**.

📌 **Key Features of Forms:**  
✅ **Prebuilt connectivity** – Automatically maps to data sources.  
✅ **Validation support** – Ensures users enter correct data.  
✅ **Customizable UI** – Modify fields, layouts, and rules.  
✅ **Auto-generated Forms** – Quickly build forms from a data source.  

## **📂 Understanding Form Modes**  
Power Apps Forms operate in three different modes:  

🔹 **New Mode (`FormMode.New`)** – Allows users to **create new records**.  
🔹 **Edit Mode (`FormMode.Edit`)** – Used for **modifying existing records**.  
🔹 **View Mode (`FormMode.View`)** – Displays **read-only** data.  

📌 **Example: Switching Between Form Modes**  
```powerapps
If(IsBlank(SelectedRecord), NewForm(EditForm1), EditForm(EditForm1))
```
📌 **Use Case:** Automatically open the form in **New Mode** if no record is selected.  

## **🎨 Adding and Customizing an Edit Form**  
To **add an Edit Form** in Power Apps:  
✔ Navigate to **Insert > Forms > Edit Form**.  
✔ Select your **data source** (e.g., SharePoint List, Dataverse Table).  
✔ Customize **data fields, labels, and input controls**.  
✔ Set `DataSource` and `Item` properties for dynamic updates.  

### **📌 Example: Setting a Form’s Data Source**  
```powerapps
EditForm1.DataSource = 'Employees'
EditForm1.Item = LookUp(Employees, ID=SelectedEmployeeID)
```
📌 **Use Case:** Displays employee details when a user selects a record.  

## **📤 Submitting a Form in Power Apps**  
Submitting a form allows users to save data to the connected source, ensuring that records are updated and stored correctly. Power Apps provides built-in validation to check for missing or incorrect values before submission.  

There are two primary ways to submit data in Power Apps: **SubmitForm( )** and **Patch( )**. Both methods allow you to write data, but they serve different purposes.  

### **📌 Using SubmitForm( )**  
`SubmitForm(EditForm1);` is the easiest way to submit a form when using an **Edit Form Control**. It automatically validates fields, ensures required fields are completed, and submits the data to the connected data source.  

📌 **Example: Submitting a Form and Navigating to a Confirmation Screen**  
```powerapps
SubmitForm(EditForm1);
Navigate(SuccessScreen, ScreenTransition.Fade)
```
📌 **Use Case:** Redirect users after successful submission.  

### **📌 Using Patch( ) for More Flexibility**  
While `SubmitForm()` works best with forms, `Patch()` provides more control when writing data. It allows updating specific fields in a data source without requiring an Edit Form Control. This is useful for scenarios where you need to modify data dynamically or work with multiple data sources.  

📌 **Example: Updating a Single Field Using Patch( )**  
```powerapps
Patch(Employees, LookUp(Employees, ID = SelectedEmployeeID), {Status: "Active"})
```
📌 **Use Case:** Updates only the **Status** field for a selected employee without affecting other fields.  

### **When to Use SubmitForm( ) vs. Patch( )?**  
✔ Use **SubmitForm( )** when working with an **Edit Form Control** for a structured form submission process.  
✔ Use **Patch( )** when you need **more control** over the update process, such as **modifying specific fields** or submitting data without using a form.  


## **🔍 Special Properties of Forms**  
Power Apps Forms come with **special properties** that enhance user experience:  

✅ **OnSuccess** – Triggers after successful submission.  
✅ **OnFailure** – Handles submission errors.  
✅ **Valid** – Checks if all required fields are filled.  
✅ **Error** – Displays error messages when submission fails.  

### **📌 Example: Displaying an Error Message if Submission Fails**  
```powerapps
If(EditForm1.Valid, SubmitForm(EditForm1), Notify("Please fill all required fields", NotificationType.Error))
```
📌 **Use Case:** Ensures users complete mandatory fields before submission.  

## **💡 Best Practices for Writing Data in Power Apps**  
✅ **Use Form Modes effectively** – Ensure users are in the correct mode (New, Edit, View).  
✅ **Validate inputs** – Use `Valid` property to prevent empty submissions.  
✅ **Leverage OnSuccess & OnFailure** – Improve error handling & user experience.  
✅ **Optimize Form Performance** – Minimize the number of fields & avoid unnecessary data lookups.  
✅ **Use Patch() for custom scenarios** – When additional processing is needed.  

## **📢 Final Thoughts**  
Writing data efficiently in Power Apps **Canvas Apps** is crucial for building **interactive, user-friendly business applications**. By using **Edit Forms, validation techniques, and Power Fx functions**, developers can ensure smooth data entry experiences. 🚀  

---

🚀 **Stay tuned for more insights!**  📜 **<a href="https://learn.microsoft.com/api/achievements/share/en-us/PranayReddy-2029/VD7UVGLM?sharingId=A727D40AB4961035" class="certificate-link">View My Completion Certificate</a>**  
</div>
