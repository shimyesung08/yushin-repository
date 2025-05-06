const files = [
  "기하 2022 3_1학기1차_문제.pdf",
  "물리 2021_1학기2차_문제.pdf",
  "물리 2022_1학기2차_문제.pdf",
  "물리 2023_1학기2차_문제.pdf",
  "생명과학 2024_1학기2차_문제.pdf",
  "중국어 2022_1학기2차_문제.pdf",
  "중국어 2023_1학기2차_답.hwp",
  "중국어 2023_1학기2차_문제.pdf",
  "중국어 2024_1학기2차_문제.pdf",
  "중국어 2024_1학기2차_답.pdf",
  "화학 1 정답.pdf",
  "화학 2022_1학기2차_문제.pdf",
  "화학 2023_1학기2차_문제.pdf",
  "화학 2024_1학기2차_문제.pdf"
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
