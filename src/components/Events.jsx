import React from 'react';

const Events = () => {
  return (
    <section id="events" className="bg-surface-container-low py-section-padding">
      <div className="max-w-container-max-width mx-auto px-gutter">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Upcoming Events</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Reserve your spot for our community gatherings.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="p-2 border border-outline rounded-full hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 border border-outline rounded-full hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-[0_10px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-outline-variant transition-all duration-300">
            <div className="relative h-56">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Traditional Brewing Roots" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6YAX9XpyAcKN7ZGuyZGtdHprkFaKHdy58k4BAENVrpepbR7Tyx2l_RtvHoKT7DeOKI9LbQ-Vm4o-38pkAdW4tGRHtwBa7WfKpOYmYOK_KM31-oScszwPhgkQtg-9NLADLMLAKQr8VY47w8fJors3nYh68y42xLbBlYVQb39eYbQ2iAxpZeeSapsC0yDGX1bU0nnwmTUC5zTFVn94rTKQHq6m4CLU6UwNDLeFHw2fclpAOLIQ07a37rtbFyi37RePcvDR54Ugt1i0"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">Workshop</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Oct 24, 2024 • 10:00 AM
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Traditional Brewing Roots</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Learn the ancestral methods of slow-roasting and manual brewing passed through generations.</p>
              <button className="w-full py-3 border border-primary text-primary rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-colors">Join Workshop</button>
          {/* Event Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-[0_10px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-outline-variant transition-all duration-300">
            <div className="relative h-56">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Acoustic Soul Sessions" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoVp9FKciXk1LlVdJ5ZsynBbLQRrRmcvRUb2B5h6uzzU0ROWuan_YmaMMtAyZEdjr0EfrsHN03D5m_76UfqyeAN-hItGylpJ_uQRCKVAPsyz-r_FoEs17oUnJAbGqokaGbtmVdo0TTcqFr0vknIuO5qOJL-bFUIVX7ruvC4licVOT-bomIaFgln0MjYaFx1ETvJ_wlY5gZ_S92y-A24nEwXahI7ZC4Zlr_elkd2xmGvzXudia_nZYFr84JJ1xvSkxrDmC157FK8Hs"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">Music</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Oct 28, 2024 • 7:00 PM
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Acoustic Soul Sessions</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Unwind with local indie artists in our courtyard for an evening of gentle melodies and warm brews.</p>
              <button className="w-full py-3 border border-primary text-primary rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-colors">Book a Seat</button>
            </div>
          </div>
          {/* Event Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-[0_10px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-outline-variant transition-all duration-300">
            <div className="relative h-56">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Storyteller's Circle" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3iwxFTZqKnhipRiKSLjuQQkTvPQgi1-zsy-sCjgtaHE5d3RUg79o05iB-ggLK2nnWlN90dY9NpfDrBvIyaSHFxsXXgS-9vHdLwffCNurL7lqP2mo1Vvy9mJ3iHr71U8kxbOz6F8vtyH06ncerYWjQ89otVgyJ0Kn3eRgeJcUY-UTeSbNC0llOtfOeHWwFoMz16sV6uermBUTkv4B6EGu89Dqw11ewHzVmjlYslbb1MzOKN64C4Sii0h7pxNksKIP5ydJMar-CGt0"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">Culture</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Nov 02, 2024 • 3:00 PM
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Storyteller's Circle</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">A monthly gathering for poets and writers to share their work in a safe, heritage-inspired environment.</p>
              <button className="w-full py-3 border border-primary text-primary rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-colors">Register Interest</button>
            </div>
          </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
