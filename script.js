// HTML-ээс хэрэгтэй element-үүдээ авч байна
const learningInput = document.getElementById("learningInput");
const addButton = document.getElementById("addButton");
const learningList = document.getElementById("learningList");

// Шинэ сурсан зүйл нэмэх function
function addLearningItem() {
  const text = learningInput.value.trim();

  // Хоосон байвал анхааруулга гаргана
  if (text === "") {
    alert("Өнөөдөр сурсан зүйлээ бичээрэй.");
    return;
  }

  // Шинэ li element үүсгэнэ
  const newItem = document.createElement("li");
  newItem.textContent = text;

  // Жагсаалтын төгсгөлд нэмнэ
  learningList.appendChild(newItem);

  // Input-оо цэвэрлэнэ
  learningInput.value = "";
}

// Button дарахад нэмнэ
addButton.addEventListener("click", addLearningItem);

// Enter дарахад бас нэмнэ
learningInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addLearningItem();
  }
});