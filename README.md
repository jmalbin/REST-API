# REST-API

<h2>Description</h2>
In this lab, I created a REST API that includes a list of medical records, including first and last name, phone number, SSN, and health status.  A REST API consists of 4 commands: Get, Post, Put, and Delete.  Get retrieves the intended data.  Post creates new data specified by the user.  Put updates already existing data.  Lastly, Delete removes data.  I used Postman in order to test this API.
<br />


<h2>Languages and Utilities Used</h2>

- <b>Visual Studio Code</b> 
- <b>Node.js</b>
- <b>Postman</b>
- <b>Nodemon</b>

<h2>Environments Used </h2>

- <b>Windows 10</b>

<h2>Program walk-through:</h2>

<p align="center">
1. Here, you can see the patients' records.  We will be using these in our test.  They will remain even if they are modified or deleted during the test. <br/>
<img src="https://i.imgur.com/ju8r01D.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
2. To begin, we will enter the information in /records using Get in order to view the records.  As you can see, because the SSN is incorrect, an error message will display.  <br/>
<img src="https://i.imgur.com/eTkobET.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
3. Likewise, you will also get an error if you enter the wrong name. <br/>
<img src="https://i.imgur.com/MYJFx6s.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
4. This is how it should look if all the information is accurate.  It will display the person's health status.  <br/>
<img src="https://i.imgur.com/Ljn5Q8s.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
5. Note that you have to state in the body that you are looking for medical records specifically.  Any other requests are not allowed.  <br/>
<img src="https://i.imgur.com/DjwF9q5.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
6. Now that we have Get done, we will now move onto Post.  Note that it is no longer searching in /records.  I entered a new set of data for a new person.  After sending it, it will be added to the list of patients.  <br/>
<img src="https://i.imgur.com/VFhzt1A.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
7. Next, we will use Put to update a patient's phone number.  My phone number has changed from 111-222-3333 to 123-456-7890.  <br/>
<img src="https://i.imgur.com/EZRIrHh.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
8. Lastly, we will try to use Delete to remove a patient.  As you can see, Jane Doe was removed successfully.  <br/>
<img src="https://i.imgur.com/mV4S4l1.png" height="80%" width="80%" alt="REST API Steps"/>
<br />
<br />
9. We can confirm the deletion of Jane's patient records using Get.  <br/>
<img src="https://i.imgur.com/lCC0gtb.png" height="80%" width="80%" alt="REST API Steps"/>
</p>
