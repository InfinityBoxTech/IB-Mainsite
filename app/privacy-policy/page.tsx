export default function PrivacyPolicy() {
  return (
    <main className="bg-white pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-neutral-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At InfinityBox, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact form.
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services.
          </p>
           {/* Add more sections as needed */}
           <div className="p-4 bg-neutral-100 rounded-lg mt-8">
            <p className="text-sm">
                Note: This is a placeholder Privacy Policy page. Please replace this with your actual privacy policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
