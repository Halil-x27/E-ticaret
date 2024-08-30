import BlogItem from "./BlogItem"

function Blog() {
  return (
    <section class="blogs">
    <div class="container">
      <div class="section-title">
        <h2>Blogumuzdan</h2>
        <p>Yaz Koleksiyonu Yeni Morden Tasarımı</p>
      </div>
      <ul class="blog-list">
       <BlogItem/>
       <BlogItem/>
       <BlogItem/>
       
       
       

      </ul>
    </div>
  </section>
  )
}

export default Blog