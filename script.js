const files = [
  "수학 2022_1학기2차_문제.pdf",
  "영어 2023_2학기1차_문제.pdf",
  "물리 2021_1학기2차_문제.pdf",
  "화학 2022_2학기1차_답.pdf",
  "국어 2023_1학기2차_답.pdf",
];

const listElement = document.getElementById("fileList");
const input = document.getElementById("searchInput");

function displayFiles(keyword = "") {
  listElement.innerHTML = "";
  const filtered = files.filter(name =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );

  filtered.forEach(name => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "papers/" + name;
    a.textContent = name.replace(".pdf", "");
    a.target = "_blank";
    li.appendChild(a);
    listElement.appendChild(li);
  });

  if (filtered.length === 0) {
    listElement.innerHTML = "<li>결과가 없습니다.</li>";
  }
}

input.addEventListener("input", () => displayFiles(input.value));
displayFiles();
