<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blood Donor App - Donor Details</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 100%;
      height: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .app-container {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .page {
      display: none;
      width: 100%;
      min-height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      animation: fadeIn 0.6s ease-in-out;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .page.active {
      position: relative;
      display: flex;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ============ HOME PAGE ============ */
    #homePage {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .home-container {
      text-align: center;
      animation: slideInUp 0.8s ease-out;
    }

    .logo {
      font-size: 5rem;
      margin-bottom: 30px;
      animation: bounce 2s infinite;
    }

    .home-container h1 {
      font-size: 3.5rem;
      color: white;
      margin-bottom: 10px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .home-container p {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 50px;
      font-weight: 300;
    }

    .role-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      max-width: 800px;
      margin: 0 auto;
    }

    .role-card {
      background: white;
      border-radius: 15px;
      padding: 40px 30px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .role-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
    }

    .role-icon {
      font-size: 4rem;
      margin-bottom: 20px;
    }

    .role-card h2 {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 10px;
    }

    .role-card p {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 20px;
    }

    .role-btn {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .role-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    /* ============ DONOR DETAILS PAGE ============ */
    #donorPage {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .donor-container {
      width: 100%;
      max-width: 550px;
      animation: slideInUp 0.8s ease-out;
    }

    .form-card {
      background: white;
      border-radius: 20px;
      padding: 50px 40px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .form-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .form-logo {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .form-header h1 {
      font-size: 2.2rem;
      color: #333;
      margin-bottom: 10px;
      font-weight: 700;
    }

    .form-header p {
      color: #666;
      font-size: 0.95rem;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      margin-bottom: 20px;
    }

    .back-btn:hover {
      background: rgba(102, 126, 234, 0.2);
    }

    .form-group {
      margin-bottom: 25px;
    }

    .form-group label {
      display: block;
      color: #333;
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }

    .required {
      color: #FF6B6B;
    }

    .form-group input,
    .form-group select {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    .form-group input::placeholder {
      color: #999;
    }

    .form-group input:focus,
    .form-group select:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .submit-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 20px;
    }

    .submit-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .submit-btn:active {
      transform: translateY(-1px);
    }

    .submit-btn:disabled {
      background: #999;
      cursor: not-allowed;
      transform: none;
    }

    .status-message {
      margin-top: 15px;
      padding: 12px;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      display: none;
      animation: fadeIn 0.4s ease-in;
    }

    .status-message.show {
      display: block;
    }

    .status-success {
      background: #d4edda;
      color: #155724;
      border-left: 4px solid #28a745;
    }

    .status-error {
      background: #f8d7da;
      color: #721c24;
      border-left: 4px solid #FF6B6B;
    }

    /* ============ ANIMATIONS ============ */
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ============ RESPONSIVE ============ */
    @media (max-width: 768px) {
      .role-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .home-container h1 {
        font-size: 2.5rem;
      }

      .logo {
        font-size: 4rem;
      }

      .form-card {
        padding: 35px 25px;
      }

      .form-header h1 {
        font-size: 1.8rem;
      }
    }

    @media (max-width: 480px) {
      .form-card {
        padding: 25px 20px;
      }

      .form-header h1 {
        font-size: 1.5rem;
      }

      .home-container h1 {
        font-size: 2rem;
      }

      .logo {
        font-size: 3rem;
        margin-bottom: 20px;
      }

      .role-grid {
        gap: 15px;
      }

      .role-card {
        padding: 25px 20px;
      }

      .role-icon {
        font-size: 3rem;
      }

      .role-card h2 {
        font-size: 1.4rem;
      }

      .page {
        padding: 20px 15px;
      }
    }
  </style>
</head>
<body>

  <div class="app-container">

    <!-- ============ HOME PAGE ============ -->
    <div id="homePage" class="page active">
      <div class="home-container">
        <div class="logo">🩸</div>
        <h1>Blood Donor App</h1>
        <p>Save Lives by Sharing Blood</p>

        <div class="role-grid">
          <!-- DONOR CARD -->
          <div class="role-card" onclick="goToDonorDetails()">
            <div class="role-icon">🩸</div>
            <h2>I'm a Donor</h2>
            <p>Help save lives by donating blood</p>
            <button type="button" class="role-btn">Register as Donor</button>
          </div>

          <!-- RECIPIENT CARD -->
          <div class="role-card" onclick="goToRecipient()">
            <div class="role-icon">❤️</div>
            <h2>I'm a Recipient</h2>
            <p>Find blood donors in your area</p>
            <button type="button" class="role-btn">Find Donors</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ DONOR DETAILS PAGE ============ -->
    <div id="donorPage" class="page">
      <div class="donor-container">
        <button class="back-btn" onclick="goToHome()">
          ← Back to Home
        </button>

        <div class="form-card">
          <div class="form-header">
            <div class="form-logo">🩸</div>
            <h1>Donor Registration</h1>
            <p>Please fill in your details to register as a donor</p>
          </div>

          <form id="donorForm" onsubmit="handleDonorSubmit(event)">
            
            <!-- NAME FIELD -->
            <div class="form-group">
              <label>Full Name <span class="required">*</span></label>
              <input 
                type="text" 
                id="donorName" 
                placeholder="Enter your full name" 
                required
              />
            </div>

            <!-- PHONE NUMBER FIELD -->
            <div class="form-group">
              <label>Phone Number <span class="required">*</span></label>
              <input 
                type="tel" 
                id="donorPhone" 
                placeholder="Enter your phone number" 
                required
              />
            </div>

            <!-- BLOOD GROUP FIELD -->
            <div class="form-group">
              <label>Blood Group <span class="required">*</span></label>
              <select id="donorBloodGroup" required>
                <option value="">-- Select Your Blood Group --</option>
                <optgroup label="Positive (Rh+)">
                  <option value="O+">O+ (Universal Donor)</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                </optgroup>
                <optgroup label="Negative (Rh-)">
                  <option value="O-">O- (Universal Donor)</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                </optgroup>
              </select>
            </div>

            <!-- LOCATION FIELD -->
            <div class="form-group">
              <label>Location/City <span class="required">*</span></label>
              <input 
                type="text" 
                id="donorLocation" 
                placeholder="Enter your city/location" 
                required
              />
            </div>

            <!-- SUBMIT BUTTON -->
            <button type="submit" class="submit-btn">Register as Donor</button>
          </form>

          <!-- STATUS MESSAGE -->
          <div id="donorStatus" class="status-message"></div>
        </div>
      </div>
    </div>

  </div>

  <script>
    // ============ PAGE SWITCHING ============
    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      document.getElementById(pageId).classList.add('active');
      window.scrollTo(0, 0);
    }

    // ============ GO TO HOME ============
    function goToHome() {
      showPage('homePage');
    }

    // ============ GO TO DONOR DETAILS ============
    function goToDonorDetails() {
      showPage('donorPage');
      document.getElementById('donorForm').reset();
      document.getElementById('donorStatus').classList.remove('show');
    }

    // ============ GO TO RECIPIENT ============
    function goToRecipient() {
      alert('Recipient registration page coming soon!');
      // You can replace this with actual recipient page navigation
    }

    // ============ HANDLE DONOR FORM SUBMISSION ============
    function handleDonorSubmit(event) {
      event.preventDefault();

      const name = document.getElementById('donorName').value.trim();
      const phone = document.getElementById('donorPhone').value.trim();
      const bloodGroup = document.getElementById('donorBloodGroup').value;
      const location = document.getElementById('donorLocation').value.trim();

      // ============ VALIDATION ============
      if (!name || !phone || !bloodGroup || !location) {
        showStatus('donorStatus', '❌ Please fill all fields', 'error');
        return;
      }

      if (name.length < 3) {
        showStatus('donorStatus', '❌ Name must be at least 3 characters', 'error');
        return;
      }

      if (phone.length < 10) {
        showStatus('donorStatus', '❌ Phone number must be at least 10 digits', 'error');
        return;
      }

      if (location.length < 2) {
        showStatus('donorStatus', '❌ Please enter a valid location', 'error');
        return;
      }

      // ============ CREATE DONOR DATA ============
      const donorData = {
        name: name,
        phone: phone,
        bloodGroup: bloodGroup,
        location: location,
        role: 'donor',
        registeredAt: new Date().toISOString(),
        donorId: 'DON_' + Math.random().toString(36).substr(2, 9).toUpperCase()
      };

      // ============ SAVE TO LOCALSTORAGE ============
      localStorage.setItem('bloodAppDonor', JSON.stringify(donorData));

      // ============ SHOW SUCCESS MESSAGE ============
      showStatus('donorStatus', '✓ Donor registration successful!', 'success');

      // ============ LOG DATA TO CONSOLE ============
      console.log('Donor Data Saved:', donorData);

      // ============ RESET FORM ============
      document.getElementById('donorForm').reset();

      // ============ SHOW CONFIRMATION AND REDIRECT ============
      setTimeout(() => {
        showDonorConfirmation(donorData);
      }, 1500);
    }

    // ============ SHOW DONOR CONFIRMATION ============
    function showDonorConfirmation(data) {
      alert(
        `✓ Registration Successful!\n\n` +
        `Donor ID: ${data.donorId}\n` +
        `Name: ${data.name}\n` +
        `Phone: ${data.phone}\n` +
        `Blood Group: ${data.bloodGroup}\n` +
        `Location: ${data.location}\n\n` +
        `Thank you for registering as a blood donor!\n` +
        `Your profile has been saved.`
      );
      goToHome();
    }

    // ============ SHOW STATUS MESSAGE ============
    function showStatus(elementId, message, type) {
      const element = document.getElementById(elementId);
      element.textContent = message;
      element.className = `status-message show status-${type}`;

      setTimeout(() => {
        element.classList.remove('show');
      }, 4000);
    }

    // ============ CHECK IF DONOR EXISTS ON LOAD ============
    window.addEventListener('load', () => {
      const existingDonor = localStorage.getItem('bloodAppDonor');
      if (existingDonor) {
        const donor = JSON.parse(existingDonor);
        console.log('Existing Donor Data:', donor);
      }
    });
  </script>

</body>
</html>