const inputBtn = document.querySelectorAll(".btn");
const clearBtn = document.querySelector("#clear-btn");
const calculatorDisplay = document.querySelector("#get-result");
const equalBtn = document.querySelector(".equal-btn");
const bp = document.querySelector(".bp");

for (let i = 0; i < inputBtn.length; i++) {
    inputBtn[i].addEventListener("click", function() {
        let number = inputBtn[i].getAttribute("data-num"); // lay gia tri nhap vao tu data-num
        calculatorDisplay.value += number; // gia tri hien thi = gia tri number da nhap vao
    })
}
equalBtn.addEventListener("click", function() {
    if (calculatorDisplay.value === "") { //neu khong nhap gia tri se hien len thong bao
        alert("Chua nhap du lieu");
    } else {
        let value = eval(calculatorDisplay.value) // neu nhap gia tri = voi gia da lay tren dong 8
        calculatorDisplay.value = value;
    }
})
clearBtn.addEventListener("click", function() {
    calculatorDisplay.value = ""; // su kien sau khi click nut clear tra ve chuoi rong
})

.bp.addEventListener("click", function() {
    let value = eval(calculatorDisplay.value) // neu nhap gia tri = voi gia da lay tren dong 8
    calculatorDisplay.value = Math.pow(value, 2);
})