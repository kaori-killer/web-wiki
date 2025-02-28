console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.querySelector("#comment-2 textarea");
  const submitButton = document.querySelector("#post_button");
  const commentList = document.querySelector(".comment-list");
  console.log(submitButton)

  submitButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();

    if (commentText === "") {
      alert("댓글을 입력해주세요.");
      return;
    }

    alert("댓글이 등록되었습니다.");

    const newComment = document.createElement("li");
    newComment.classList.add("comment-item");
    newComment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${commentText}</div>
      </div>
    `;

    commentList.appendChild(newComment);
    commentInput.value = "";
  });
});
