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


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("new-post-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const image = document.getElementById("image").value.trim();

    if (title === "" || content === "") {
      alert("Title and content cannot be empty!");
      return;
    }

    const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    const newPost = {
      id: Date.now(),
      title,
      content,
      image
    };

    posts.push(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(posts));

    window.location.href = "index.html";
  });
});