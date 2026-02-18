import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Calendar, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  offset: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Engineering',
    title: 'The Future of Industrial Automation',
    excerpt: 'Exploring how Industry 4.0 is transforming manufacturing with smart systems and AI-driven processes.',
    date: 'Dec 15, 2024',
    image: '/images/blog1-engineering.jpg',
    offset: 0,
  },
  {
    id: 2,
    category: 'Robotics',
    title: 'Getting Started with Industrial Robotics',
    excerpt: 'A beginner guide to understanding robotic arms, kinematics, and programming for manufacturing.',
    date: 'Dec 10, 2024',
    image: '/images/blog2-robotics.jpg',
    offset: 40,
  },
  {
    id: 3,
    category: 'Student Life',
    title: 'My Journey as an Engineering Student',
    excerpt: 'Reflections on my academic journey at CUET and lessons learned along the way.',
    date: 'Dec 5, 2024',
    image: '/images/blog3-study.jpg',
    offset: 20,
  },
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span
            className="text-sm font-medium text-blue-600 tracking-widest uppercase block mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s var(--ease-expo-out)',
            }}
          >
            Blog & Articles
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s var(--ease-expo-out) 0.1s',
              }}
            >
              Latest Insights
            </h2>
            <p
              className="text-gray-500 max-w-md"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.2s',
              }}
            >
              Thoughts on engineering, technology, and student life
            </p>
          </div>
        </div>

        {/* Blog Grid - Staggered Masonry */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                marginTop: `${post.offset}px`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
                transition: `all 0.8s var(--ease-expo-out) ${0.3 + index * 0.15}s`,
              }}
            >
              <div
                className="card-lift bg-white rounded-2xl overflow-hidden border border-gray-100"
                style={{
                  transform: hoveredCard === post.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredCard === post.id
                    ? '0 20px 60px rgba(0, 0, 0, 0.15)'
                    : '0 4px 20px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.4s var(--ease-expo-out)',
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredCard === post.id ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-blue-900">
                      {post.category}
                    </span>
                  </div>
                  {/* Arrow Icon */}
                  <div
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      transform: hoveredCard === post.id ? 'translateY(0)' : 'translateY(10px)',
                    }}
                  >
                    <ArrowUpRight size={18} className="text-blue-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-blue-900 transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s var(--ease-expo-out) 0.8s',
          }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-blue-900 font-medium hover:gap-4 transition-all duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <BookOpen size={18} />
            View All Articles
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
