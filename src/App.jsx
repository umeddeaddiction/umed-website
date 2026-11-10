import React, { useState } from 'react';
import { 
  Heart, Shield, Phone, Mail, MapPin, Menu, X, Users, 
  Calendar, CheckCircle, Award, Stethoscope, Sparkles, 
  Image, Video, ChevronRight, Send, AlertCircle 
} from 'lucide-react';

export default function App() {
  // --- STATE MANAGEMENT ---
  // Tracks the currently active mobile menu drawer state (open/closed)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Tracks form inputs for the Inquiry Form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Alcohol Addiction',
    message: ''
  });

  // Tracks inquiry submission status (success alert message)
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Gallery filter state ('all', 'facility', 'activities', 'success')
  const [galleryFilter, setGalleryFilter] = useState('all');

  // --- HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending inquiry to info@umedfoundation.org
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after successful submission
      setFormData({ name: '', phone: '', email: '', category: 'Alcohol Addiction', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  // Gallery items dataset
  const galleryItems = [
    { id: 1, type: 'facility', title: 'Serene Meditation Lawn', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', category: 'Facility' },
    { id: 2, type: 'facility', title: 'Consultation & Therapy Room', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', category: 'Facility' },
    { id: 3, type: 'activities', title: 'Group Counseling Session', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', category: 'Activities' },
    { id: 4, type: 'activities', title: 'Yoga & Mindfulness Workshop', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', category: 'Activities' },
    { id: 5, type: 'success', title: 'Recovery Milestone Celebration', url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80', category: 'Success Stories' },
    { id: 6, type: 'facility', title: 'Comfortable Residential Rooms', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', category: 'Facility' },
  ];

  const filteredGallery = galleryFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === galleryFilter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* ================= TOP EMERGENCY BAR ================= */}
      <div className="bg-teal-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-300" />
            <span>Confidential Helpline 24/7 Support for Families & Individuals</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-teal-200">
              <Phone className="w-3.5 h-3.5" /> +91 98765 43210
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:info@umedfoundation.org" className="flex items-center gap-1 hover:text-teal-200">
              <Mail className="w-3.5 h-3.5" /> info@umedfoundation.org
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION BAR ================= */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                UF
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-teal-900 block">Umed Foundation</span>
                <span className="text-xs text-slate-500 tracking-wider uppercase font-medium">De-Addiction & Rehab Centre</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <a href="#home" className="hover:text-teal-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-teal-600 transition-colors">About Us</a>
              <a href="#programs" className="hover:text-teal-600 transition-colors">Programs</a>
              <a href="#admission" className="hover:text-teal-600 transition-colors">Admission</a>
              <a href="#gallery" className="hover:text-teal-600 transition-colors">Gallery</a>
              <a href="#inquiry" className="hover:text-teal-600 transition-colors">Inquiry Form</a>
              <a href="#contact" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-sm">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-slate-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">About Us</a>
            <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Programs</a>
            <a href="#admission" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Admission</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Gallery</a>
            <a href="#inquiry" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Inquiry Form</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-teal-600 font-semibold">Contact Us</a>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative bg-gradient-to-r from-teal-900 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-teal-800/80 text-teal-200 text-xs font-semibold px-3 py-1 rounded-full border border-teal-700">
              <Sparkles className="w-3.5 h-3.5" /> Compassionate & Evidence-Based Recovery
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              A New Beginning <span className="text-teal-400">Without Addiction</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl">
              Umed Foundation provides a safe, caring, and professional environment helping individuals reclaim their lives from alcohol, drug, and behavioral dependencies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#inquiry" className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition shadow-lg">
                Send Confidential Inquiry
              </a>
              <a href="#programs" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition">
                Explore Programs
              </a>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-teal-300">Why Families Trust Umed Foundation</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-400 shrink-0" /> 100% Strict Confidentiality & Privacy</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-400 shrink-0" /> Experienced Psychiatrists & De-addiction Experts</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-400 shrink-0" /> Structured 12-Step Holistic Therapy & Yoga</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-400 shrink-0" /> Family Counseling & Post-Rehab Aftercare</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">About Umed Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Dedicated to Healing Lives and Restoring Families</h2>
            <p className="text-slate-600 leading-relaxed">
              Founded with the mission to eradicate substance dependency through empathy and medical excellence, Umed Foundation is a premier rehabilitation centre. We believe that addiction is a treatable health condition, not a failure of character.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-3xl font-extrabold text-teal-600 mb-1">10+</div>
                <div className="text-sm text-slate-500 font-medium">Years of Dedicated Service</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-3xl font-extrabold text-teal-600 mb-1">2,500+</div>
                <div className="text-sm text-slate-500 font-medium">Successful Recoveries</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80" 
              alt="Medical Team" 
              className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Our Healing Programs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Comprehensive Rehabilitation Services</h2>
            <p className="text-slate-600">Tailored treatment plans designed to address physical, psychological, and emotional recovery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medical Detoxification</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Safe, medically supervised withdrawal management in a comfortable and secure environment under expert doctors and nursing staff.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Residential Rehab</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Structured daily schedules featuring individual psychotherapy, cognitive behavioral therapy (CBT), group sharing, and holistic wellness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Family & Aftercare</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Counseling sessions for family members to heal relationships, alongside continuous post-discharge support to prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADMISSION SECTION ================= */}
      <section id="admission" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Admission Guidelines</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple & Transparent Admission Process</h2>
            <p className="text-slate-600">We make admission hassle-free so you or your loved one can start treatment immediately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200">01</span>
              <h3 className="font-bold text-slate-900 mb-2 mt-2">1. Initial Call</h3>
              <p className="text-sm text-slate-600">Speak confidentially with our counselor to discuss the addiction history and requirements.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200">02</span>
              <h3 className="font-bold text-slate-900 mb-2 mt-2">2. Assessment</h3>
              <p className="text-sm text-slate-600">Our medical director reviews physical and psychological health to draft a customized plan.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200">03</span>
              <h3 className="font-bold text-slate-900 mb-2 mt-2">3. Admission</h3>
              <p className="text-sm text-slate-600">Arrive at our facility for formal intake, orientation, and comfortable room allotment.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 relative">
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200">04</span>
              <h3 className="font-bold text-slate-900 mb-2 mt-2">4. Treatment Begins</h3>
              <p className="text-sm text-slate-600">Detoxification and therapy sessions commence under expert supervision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Visual Tour</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Photo & Video Gallery</h2>
            <p className="text-slate-600">Explore our clean, peaceful, and supportive environment.</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            <button 
              onClick={() => setGalleryFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${galleryFilter === 'all' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setGalleryFilter('facility')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${galleryFilter === 'facility' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
              Facilities
            </button>
            <button 
              onClick={() => setGalleryFilter('activities')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${galleryFilter === 'activities' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
              Activities
            </button>
            <button 
              onClick={() => setGalleryFilter('success')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${galleryFilter === 'success' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
              Success Milestones
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/75 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INQUIRY FORM SECTION ================= */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8 space-y-2">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Confidential Consultation</span>
            <h2 className="text-3xl font-bold text-slate-900">Inquiry Form</h2>
            <p className="text-slate-600 text-sm">Fill out the form below. Your details are securely transmitted to our admission desk at <strong className="text-teal-700">info@umedfoundation.org</strong>.</p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-xl flex items-center gap-3 text-teal-800">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
              <div className="text-sm">
                <strong>Inquiry Sent Successfully!</strong> Our counselor will get in touch with you shortly at your provided phone number/email.
              </div>
            </div>
          )}

          <form onSubmit={handleInquirySubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Addiction Category *</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                >
                  <option value="Alcohol Addiction">Alcohol Addiction</option>
                  <option value="Drug / Substance Abuse">Drug / Substance Abuse</option>
                  <option value="Behavioral / Gambling">Behavioral / Gambling</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message / Details</label>
              <textarea 
                name="message" 
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mention any specific concerns or questions..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition shadow-md flex items-center justify-center gap-2"
            >
              {loading ? 'Sending Inquiry...' : <>Submit Inquiry to info@umedfoundation.org <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </section>

      {/* ================= CONTACT US SECTION ================= */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="text-teal-400 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            <h2 className="text-3xl font-bold">Contact Umed Foundation</h2>
            <p className="text-slate-300">
              Reach out to our helpline or visit our campus for a confidential discussion. We are here to help 24/7.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-teal-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Center Address</h4>
                  <p className="text-slate-300 text-sm">Umed Foundation Rehab Centre, Near Green Valley, Main Highway, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-teal-400 shrink-0" />
                <div>
                  <h4 className="font-semibold">Helpline Numbers</h4>
                  <p className="text-slate-300 text-sm">+91 98765 43210 / +91 91234 56789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-teal-400 shrink-0" />
                <div>
                  <h4 className="font-semibold">Official Email</h4>
                  <p className="text-slate-300 text-sm">info@umedfoundation.org</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-4">
            <h3 className="text-xl font-bold text-teal-300">Need Immediate Emergency Intervention?</h3>
            <p className="text-slate-300 text-sm">
              If someone is experiencing acute withdrawal symptoms or requires urgent medical assistance, our crisis response team is available round the clock.
            </p>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition shadow-md">
              <Phone className="w-5 h-5" /> Call Emergency Helpline Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Umed Foundation De-Addiction Centre. All rights reserved.</p>
          <p className="text-xs">Designed with care for confidential recovery support.</p>
        </div>
      </footer>

    </div>
  );
}