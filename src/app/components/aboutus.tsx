import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="px-8 py-12 sm:py-16 md:px-20 relative min-h-screen overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg">
        Welcome to our "About Us" page. Here, you can learn more about who we are, what we do, and our mission.
        We are dedicated to providing cutting-edge forex trading solutions through our advanced trading robot.
      </p>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center">
          <p className="md:w-1/2">
            Our mission is to empower traders of all levels with innovative technology that optimizes trading performance.
            We aim to revolutionize the forex market by providing a reliable and efficient trading robot that maximizes profits and minimizes risks.
          </p>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
            <Image
              src="/path-to-your-image.jpg"
              alt="Our mission"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/path-to-another-image.jpg"
              alt="Our team"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="md:w-1/2">
            Our team consists of experienced traders, software developers, and financial experts who work together to create a seamless trading experience.
            We are committed to continuous improvement and staying ahead of market trends to ensure our trading robot remains at the forefront of forex trading technology.
          </p>
        </div>
      </section>
    </div>
  );
}
