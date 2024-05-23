document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const previewTitle = document.getElementById("preview-title");
  const previewContent = document.getElementById("preview-content");

  if (titleInput && contentInput && previewTitle && previewContent) {
    titleInput.addEventListener("input", function () {
      previewTitle.textContent = titleInput.value || "Title Preview";
    });

    contentInput.addEventListener("input", function () {
      previewContent.textContent = contentInput.value || "Content Preview";
    });
  }
});
