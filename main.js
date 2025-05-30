const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch(`http://localhost:3000/postssss/${postId}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    const container = document.getElementsByClassName("seo-mkt")[0];
    container.innerHTML = `
   ${response.code}`;
  })
  .catch(function (error) {
    console.error("Lỗi khi load dữ liệu:", error);
  });
