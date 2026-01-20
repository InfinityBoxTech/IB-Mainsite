export default function TermsOfService() {
  return (
    <main className="bg-white pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-neutral-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to InfinityBox. By accessing or using our website, you agree to be bound by these Terms of Service.
          </p>
          <h2>1. Introduction</h2>
          <p>
            These Terms of Service govern your use of our website and services.
          </p>
          <h2>2. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes along with our Privacy Policy.
          </p>
          {/* Add more sections as needed */}
          <div className="p-4 bg-neutral-100 rounded-lg mt-8">
            <p className="text-sm">
                Note: This is a placeholder Terms of Service page. Please replace this with your actual legal terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
