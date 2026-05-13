import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedButton } from '../components/ui/AnimatedButton';

export const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock available dates
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      dateObj: d,
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNumber: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' })
    };
  });

  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM", "05:30 PM"];

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-ivory">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-aqua/20 to-coral/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-coral transition-colors mb-12 group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {isBooked ? (
          <GlassCard className="!p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Consultation Booked!</h2>
            <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
              Your appointment is confirmed. We have sent the meeting details to your email address. Looking forward to speaking with you!
            </p>
            <Link to="/">
              <AnimatedButton variant="primary" className="px-8 py-3">Return to Homepage</AnimatedButton>
            </Link>
          </GlassCard>
        ) : (
          <GlassCard className="!p-8 md:!p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Schedule a Consultation</h1>
              <p className="text-slate-500">Select a date and time to speak with our premium advisor.</p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Date Selection */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarIcon className="text-coral" size={20} />
                  <h3 className="text-lg font-bold text-slate-800">Select Date</h3>
                </div>
                <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x">
                  {dates.map((d, i) => {
                    const isSelected = selectedDate === i;
                    // Disable weekends
                    const isWeekend = d.dateObj.getDay() === 0 || d.dateObj.getDay() === 6;
                    
                    return (
                      <button
                        key={i}
                        disabled={isWeekend}
                        onClick={() => setSelectedDate(i)}
                        className={`snap-center shrink-0 w-20 h-24 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                          isWeekend ? 'opacity-50 cursor-not-allowed border-slate-200 bg-slate-50' :
                          isSelected ? 'border-coral bg-coral/10 scale-105' : 'border-transparent bg-slate-50 hover:border-coral/30 hover:bg-white'
                        }`}
                      >
                        <span className={`text-sm ${isSelected ? 'text-coral' : 'text-slate-500'}`}>{d.dayName}</span>
                        <span className={`text-2xl font-bold ${isSelected ? 'text-slate-800' : 'text-slate-700'}`}>{d.dayNumber}</span>
                        <span className={`text-xs ${isSelected ? 'text-coral' : 'text-slate-500'}`}>{d.month}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate !== null && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="text-coral" size={20} />
                    <h3 className="text-lg font-bold text-slate-800">Select Time</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map((time, i) => {
                      const isSelected = selectedTime === i;
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedTime(i)}
                          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 ${
                            isSelected ? 'bg-coral border-coral text-white' : 'bg-slate-50 border-transparent text-slate-600 hover:border-coral/30 hover:bg-white'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              {selectedDate !== null && selectedTime !== null && (
                <div className="pt-8 border-t border-slate-100 mt-4">
                  <form onSubmit={handleBooking} className="flex flex-col gap-4 max-w-sm mx-auto">
                    <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-coral/50" />
                    <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-coral/50" />
                    <AnimatedButton variant="primary" className="w-full mt-2" type="submit">
                      Confirm Appointment
                    </AnimatedButton>
                  </form>
                </div>
              )}
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  );
};
