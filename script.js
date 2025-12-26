// filepath: script.js
// ตัวแปรเก็บตัวเลขลับ
let ans = Math.floor(Math.random() * 100) + 1;
// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
  let g = parseInt(document.getElementById("txt").value);
  let result = document.getElementById("result");
  if (g === ans) {
    result.textContent = "✓ ถูกต้อง!";
  } else if (g > ans) {
    result.textContent = "↓ ตัวเลขสูงไป";
  } else {
    result.textContent = "↑ ตัวเลขตํ่าไป";
  }
  // ตัวแปรนับจํานวนครั้งที่ทาย จากstep-06
  let attemptCount = 0;
  // ฟังก์ชันอัปเดตจํานวนครั้ง
  function updateDisplay() {
    const attemptsContainer = document.getElementById("attemptsContainer");
    attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
  }
  //อัพเดตมาจาก step-04 หน้า 10 อ่านดีๆนะอย่าไปแก้โค้ด
  // filepath: script.js
  // ...existing code...
  // ฟังก์ชันตรวจสอบการทาย
  function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guessValue = parseInt(guessInput.value);
    const resultContainer = document.getElementById("resultContainer");
    // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
    // ... validation code ...
    attemptCount++; // เพิ่มตรงนี้
    if (guessValue === secretNumber) {
      resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
    }
    // ... rest of code ...
    if (isNaN(guessValue) || guessInput.value === "") {
      resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลข!
 </div>
 `;
      return;
    }
    // Validation: ตรวจสอบว่าอยู่ในช่วง 1-100 หรือไม่
    if (guessValue < 1 || guessValue > 100) {
      resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100!
 </div>
 `;
      return;
    }
    attemptCount++;
    if (guessValue === secretNumber) {
      resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
    } else if (guessValue > secretNumber) {
      resultContainer.innerHTML = `
 <div class="alert alert-warning" role="alert">
 ↓ ตัวเลขสูงไป
 </div>
 `;
    } else {
      resultContainer.innerHTML = `
 <div class="alert alert-info" role="alert">
 ↑ ตัวเลขตํ่าไป
 </div>
 `;
    }
    updateDisplay();
    guessInput.value = "";
    guessInput.focus();
  }
 // filepath: script.js
// ...existing code...
// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
 initializeGame();
 document.getElementById("resultContainer").innerHTML = "";
 document.getElementById("guessInput").value = "";
 document.getElementById("guessInput").focus();
}
// ...existing code...
}
