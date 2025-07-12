import Image from "next/image";
import Link from "next/link";

export default function ImageDemo() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">
            Next.js Image Component Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Demonstration of Next.js Image component with different image
            formats (JPEG, PNG, WebP)
          </p>
        </div>

        {/* Image Format Demo Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Image Formats Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* JPEG Image */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">JPEG Format</h3>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <Image
                  src="https://picsum.photos/300/200.jpg"
                  alt="Sample JPEG image"
                  width={300}
                  height={200}
                  className="rounded-lg"
                  priority
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                300x200 JPEG image from Picsum
              </p>
            </div>

            {/* PNG Image */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">PNG Format</h3>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <Image
                  src="https://dummyimage.com/300x200/0099ff/ffffff.png&text=PNG+Sample"
                  alt="Sample PNG image"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                300x200 PNG image from DummyImage
              </p>
            </div>

            {/* WebP Image */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">WebP Format</h3>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <Image
                  src="https://picsum.photos/300/200.webp"
                  alt="Sample WebP image"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                300x200 WebP image from Picsum
              </p>
            </div>
          </div>
        </div>

        {/* Image Format Information */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Image Format Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-blue-600 dark:text-blue-400 text-lg mb-2">
                JPEG
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Best for photos and complex images</li>
                <li>• Lossy compression</li>
                <li>• Smaller file sizes</li>
                <li>• Widely supported</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-600 dark:text-green-400 text-lg mb-2">
                PNG
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Best for images with transparency</li>
                <li>• Lossless compression</li>
                <li>• Perfect for text and graphics</li>
                <li>• Larger file sizes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-600 dark:text-purple-400 text-lg mb-2">
                WebP
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Modern format with superior compression</li>
                <li>• Supports transparency and animation</li>
                <li>• 25-35% smaller than JPEG/PNG</li>
                <li>• Not supported in older browsers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Different Image Sizes Demo */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Responsive Image Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-medium mb-2">Small (150x100)</h4>
              <Image
                src="https://picsum.photos/150/100.jpg"
                alt="Small image"
                width={150}
                height={100}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Medium (250x167)</h4>
              <Image
                src="https://picsum.photos/250/167.jpg"
                alt="Medium image"
                width={250}
                height={167}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Large (400x267)</h4>
              <Image
                src="https://picsum.photos/400/267.jpg"
                alt="Large image"
                width={400}
                height={267}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Next.js Image Features */}
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            Next.js Image Component Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 text-blue-600 dark:text-blue-400">
                Performance Optimizations
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Automatic image optimization</li>
                <li>• Lazy loading by default</li>
                <li>• Prevents Cumulative Layout Shift (CLS)</li>
                <li>• Modern format conversion (WebP, AVIF)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-blue-600 dark:text-blue-400">
                Developer Experience
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Responsive by default</li>
                <li>• Built-in placeholder support</li>
                <li>• Priority loading for critical images</li>
                <li>• Automatic device-based sizing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
