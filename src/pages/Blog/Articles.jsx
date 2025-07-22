import "./Articles.css";
const articles = [
  {
    id: 1,
    title: "10 Tips to Increase Your Daily Step Count",
    date: "April 20, 2025",
    time: "8:40 pm",
    readTime: "4 min read",
    excerpt:
      "Clear some steady ways to increase your step count while enjoying your daily routine and not put extra sports overload.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 2,
    title: "The Science Behind 10,000 Steps",
    date: "April 20, 2025",
    time: "8:40 pm",
    readTime: "5 min read",
    excerpt:
      "Is the 10,000 steps goal based on science? Let’s dive into the research behind this popular fitness benchmark.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 3,
    title: "Walking vs. Running: Which is Better?",
    date: "April 21, 2025",
    time: "10:15 am",
    readTime: "6 min read",
    excerpt:
      "Both walking and running are great cardio exercises—but which one fits your fitness goals better? Let’s compare.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 4,
    title: "How to Build a Walking Habit that Sticks",
    date: "April 21, 2025",
    time: "11:30 am",
    readTime: "5 min read",
    excerpt:
      "Forming a lasting walking habit doesn’t need to be hard. Here’s how to create a routine you’ll enjoy long term.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 5,
    title: "Top 5 Local Trails for a Refreshing Walk",
    date: "April 22, 2025",
    time: "3:20 pm",
    readTime: "3 min read",
    excerpt:
      "Explore the best walking trails in your area that offer beautiful scenery and a safe walking environment.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 6,
    title: "How Walking Affects Mental Health",
    date: "April 22, 2025",
    time: "4:00 pm",
    readTime: "4 min read",
    excerpt:
      "Walking doesn’t just benefit your body—it also boosts your mood and reduces stress. Here’s the science behind it.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 7,
    title: "Why You Should Walk After Meals",
    date: "April 23, 2025",
    time: "6:45 pm",
    readTime: "3 min read",
    excerpt:
      "A short walk after eating can help regulate blood sugar and support digestion. Find out how and why it works.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 8,
    title: "Walking: The Best Low-Impact Exercise for Everyday Fitness",
    date: "April 23, 2025",
    time: "7:10 pm",
    readTime: "5 min read",
    excerpt:
      "Low impact doesn’t mean low results. Discover how walking can be a powerful tool in your fitness routine.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
  {
    id: 9,
    title: "How Many Steps Should You Walk Daily?",
    date: "April 24, 2025",
    time: "9:00 am",
    readTime: "4 min read",
    excerpt:
      "Not sure what your step goal should be? Learn how to customize it based on age, fitness level, and lifestyle.",
    image:
      "https://images.pexels.com/photos/16344511/pexels-photo-16344511.jpeg",
  },
];

const Articles = () => {
  return (
    <section className="articles-section">
      <h2 className="articles-title">Latest Articles</h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <div className="article-content">
              <div className="article-meta">
                <span>{article.date}</span> • <span>{article.time}</span> •{" "}
                <span>{article.readTime}</span>
              </div>
              <h3 className="article-heading">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
