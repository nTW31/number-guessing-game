// ตัวแปร global สำหรับเก็บค่าเลขลับและจำนวนครั้งที่ทาย
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;
// ฟังก์ชันเริ่มเกมใหม่ (หรือใช้ตอนโหลดครั้งแรก)
function initializeGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    updateDisplay();
    console.log("Secret Number: " + secretNumber); // เอาไว้แอบดูคำตอบใน Console
}
// ฟังก์ชันอัปเดตการแสดงผลจำนวนครั้ง
function updateDisplay() {
    const attemptsContainer = document.getElementById("attemptsContainer");
    attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}
// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guessValue = parseInt(guessInput.value);
    const resultContainer = document.getElementById("resultContainer");
    // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
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
    // เพิ่มจำนวนครั้งที่ทาย
    attemptCount++;
    // ตรวจสอบความถูกต้อง
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
    // อัปเดต UI
    updateDisplay();
    guessInput.value = "";
    guessInput.focus();
}
// ฟังก์ชันเริ่มเกมใหม่ (ปุ่ม Reset)
function resetGame() {
    initializeGame();
    document.getElementById("resultContainer").innerHTML = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}
// Event Listeners: เมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener("DOMContentLoaded", function () {
    // เริ่มต้นเกม
    initializeGame();
    const guessInput = document.getElementById("guessInput");
    // เพิ่มการ select text อัตโนมัติเมื่อคลิกที่ช่อง input
    guessInput.addEventListener("focus", function () {
        this.select();
    });
    // เพิ่มการรองรับปุ่ม Enter
    guessInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });
});