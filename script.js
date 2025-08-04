document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");

  if (!postsContainer) return; 

  const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  if (posts.length === 0) {
    postsContainer.innerHTML = "<p>No blog posts yet.</p>";
    return;
  }

  posts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content.substring(0, 100)}...</p>
      <a href="post.html?id=${post.id}" class="btn">Read More</a>
    `;
    postsContainer.appendChild(postEl);
  });
});