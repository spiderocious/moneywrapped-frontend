import { Badge, Card, Text } from "@shared/ui";

const stats = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    value: "100k+",
    label: "ANALYSES COMPLETED",
  },
  {
    icon: (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-6 h-6 ${star === 5 ? "text-warning/50" : "text-warning"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    ),
    value: "4.9/5",
    label: "AVERAGE RATING",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
    value: "98%",
    label: "WOULD RECOMMEND",
  },
];

const testimonials = [
  {
    initials: "CO",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    name: "Chinedu O.",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "Finally understood where my salary goes every month. The dashboard makes it so easy to spot unnecessary subscriptions.",
    verified: true,
  },
  {
    initials: "AP",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    name: "Amaka P.",
    location: "Abuja, Nigeria",
    rating: 5,
    text: "The breakdown was brutal but necessary. Highly recommend for anyone trying to save for their Japa plans!",
    verified: true,
  },
  {
    initials: "TA",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    name: "Tunde A.",
    location: "Remote (PHC)",
    rating: 5,
    text: "Best financial retrospective tool in Nigeria. It actually understands our local context unlike foreign apps.",
    verified: true,
  },
  {
    initials: "FA",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    name: "Fatima A.",
    location: "Kano, Nigeria",
    rating: 5,
    text: "I was shocked to see how much I spent on food delivery. This app is a wake-up call I needed.",
    verified: true,
  },
  {
    initials: "OE",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
    name: "Oluwaseun E.",
    location: "Lagos, Nigeria",
    rating: 4,
    text: "Simple, effective, and beautifully designed. It helps me track my savings goals alongside my spending.",
    verified: true,
  },
  {
    initials: "NB",
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
    name: "Ngozi B.",
    location: "Enugu, Nigeria",
    rating: 5,
    text: "I've recommended this to all my friends. The end-of-year summary is something I look forward to now.",
    verified: true,
  },
];

const pressLogos = [
  { name: "TechCabal", text: "TechCabal" },
  { name: "Nairametrics", text: "Nairametrics" },
  { name: "Techpoint.africa", text: "Techpoint.africa" },
];

export function TestimonialsSection() {
  return (
    <section className="min-h-screen bg-neutral-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="info" className="mb-6">
            WHAT USERS SAY
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by 50,000+ Nigerians
          </h2>
          <Text
            variant="body"
            color="secondary"
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            See why people trust FinanceWrapped to make sense of their money and
            build better financial habits.
          </Text>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center animate-slide-in-up hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <Text
                variant="heading-2"
                className="text-3xl md:text-4xl text-primary mb-2"
              >
                {stat.value}
              </Text>
              <Text variant="caption" color="secondary" className="uppercase">
                {stat.label}
              </Text>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 animate-slide-in-up hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: `${(index + 3) * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.bgColor} ${testimonial.textColor} flex items-center justify-center font-bold`}
                >
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <Text variant="body" weight="bold">
                    {testimonial.name}
                  </Text>
                  <Text variant="caption" color="secondary">
                    {testimonial.location}
                  </Text>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-warning"
                        : "text-neutral-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <Text variant="body" color="secondary" className="mb-4">
                "{testimonial.text}"
              </Text>

              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="flex items-center gap-2 text-primary">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Text variant="caption" className="text-primary">
                    Verified User
                  </Text>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Press Section */}
        <div className="text-center animate-fade-in-delayed">
          <Text variant="caption" color="secondary" className="uppercase mb-6">
            AS SEEN IN
          </Text>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {pressLogos.map((logo, index) => (
              <div
                key={index}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <Text
                  variant="body"
                  weight="bold"
                  className="text-neutral-600 text-lg md:text-xl"
                >
                  {logo.text}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
