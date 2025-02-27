// 댓글 기능 구현
document.addEventListener('DOMContentLoaded', function() {
    // 필요한 요소 가져오기
    const commentForm = document.querySelector('.comment-writing-container form');
    const commentTextarea = document.querySelector('.comment-writing-container textarea');
    const commentList = document.querySelector('.comment-list');

    // 폼 제출 시 댓글 추가
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 동작 방지

        // 댓글 내용 가져오기
        const commentText = commentTextarea.value.trim();

        // 빈 댓글이면 무시
        if (!commentText) return;

        // 새 댓글 요소 생성
        const newComment = document.createElement('li');
        newComment.innerHTML = `
          <div class="comment-item">
            <div class="comment-author">
              <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
              <span>방문자</span>
            </div>
            <div class="comment-content">
              ${commentText}
            </div>
          </div>
        `;

        // 댓글 목록에 추가
        commentList.prepend(newComment);

        // 입력 필드 초기화
        commentTextarea.value = '';
    });
});
