const password = "yushin123"; // 원하는 비밀번호로 변경 가능

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("loginError");

  if (input === password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    showFiles();
  } else {
    error.textContent = "비밀번호가 틀렸습니다.";
  }
}

const files = [
  "papers/기하 2023_1학기1차_문제.pdf",
  "papers/물리 2021_1학기2차_문제.pdf",
  "papers/물리 2022_1학기2차_문제.pdf",
  "papers/물리 2023_1학기2차_문제.pdf",
  "papers/생명과학 2024_1학기2차_문제.pdf",
  "papers/중국어 2022_1학기2차_문제.pdf",
  "papers/중국어 2023_1학기2차_답.hwp",
  "papers/중국어 2023_1학기2차_문제.pdf",
  "papers/중국어 2024_1학기2차_문제.pdf",
  "papers/중국어 2024_1학기2차_답.pdf",
  "papers/화학 1 정답.pdf",
  "papers/화학 2022_1학기2차_문제.pdf",
  "papers/화학 2023_1학기2차_문제.pdf",
  "papers/화학 2024_1학기2차_문제.pdf"
];

function showFiles() {
  const list = document.getElementById("fileList");
  files.forEach(file => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = file;
    a.textContent = file.replace("papers/", "");
    a.target = "_blank";
    li.appendChild(a);
    list.appendChild(li);
  });
}

function filterFiles() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("fileList");
  list.innerHTML = "";
  files
    .filter(file => file.toLowerCase().includes(keyword))
    .forEach(file => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = file;
      a.textContent = file.replace("papers/", "");
      a.target = "_blank";
      li.appendChild(a);
      list.appendChild(li);
    });
}
