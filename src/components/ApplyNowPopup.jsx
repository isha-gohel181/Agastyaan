import { useEffect, useState } from "react";

const ApplyNowPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill all the fields.");
      return;
    }
    const text = `*[NEW APPLICATION]*\n\nHello Agastyaan Technology!\n\nHere are the details:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}`;
    const encodedText = encodeURIComponent(text);
    window.location.href = `https://wa.me/916230466249?text=${encodedText}`;
    setOpen(false);
  };

  useEffect(() => {
    const alreadyShown = localStorage.getItem("applyPopupShown");
    if (!alreadyShown) {
      setTimeout(() => {
        setOpen(true);
        localStorage.setItem("applyPopupShown", "true");
      }, 8000); // delay thoda smooth feel ke liye
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="mb-4 text-center text-2xl font-bold text-orange-600">
          Apply Now
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-600 py-3 font-semibold text-white hover:bg-orange-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowPopup;
