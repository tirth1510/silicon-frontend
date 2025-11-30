import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/imageWithFallback';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Advanced Imaging Solutions',
      category: 'Diagnostic Equipment',
      image: 'https://images.unsplash.com/photo-1666214280250-41f16ba24a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NjQ0NzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'State-of-the-art medical imaging systems deployed in 50+ healthcare facilities',
      stats: { installations: '50+', satisfaction: '98%' }
    },
    {
      id: 2,
      title: 'Laboratory Automation',
      category: 'Lab Equipment',
      image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NDQyMzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Automated laboratory systems improving efficiency and accuracy in diagnostics',
      stats: { installations: '120+', satisfaction: '96%' }
    },
    {
      id: 3,
      title: 'Surgical Technology',
      category: 'Surgical Equipment',
      image: 'https://images.unsplash.com/photo-1668453598237-27098d2575ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQ0NzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Precision surgical instruments trusted by leading surgical teams worldwide',
      stats: { installations: '200+', satisfaction: '99%' }
    },
    {
      id: 4,
      title: 'Patient Monitoring Systems',
      category: 'Monitoring Equipment',
      image: 'https://images.unsplash.com/photo-1763070282903-cbe9922ab7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQ0MTAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Real-time patient monitoring solutions enhancing ICU and ward care',
      stats: { installations: '300+', satisfaction: '97%' }
    },
    {
      id: 5,
      title: 'Diagnostic Devices',
      category: 'Point-of-Care',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlc3xlbnwxfHx8fDE3NjQ0NzczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Portable diagnostic devices for rapid and accurate testing at point of care',
      stats: { installations: '500+', satisfaction: '95%' }
    },
    {
      id: 6,
      title: 'Telemedicine Platforms',
      category: 'Digital Health',
      image: 'https://images.unsplash.com/photo-1730181731087-ed9a04ca8406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY0Mzg3Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Integrated telemedicine solutions connecting patients and providers remotely',
      stats: { installations: '150+', satisfaction: '94%' }
    }
  ];

  const achievements = [
    { icon: Award, label: 'Industry Awards', value: '25+' },
    { icon: Users, label: 'Healthcare Partners', value: '500+' },
    { icon: Globe, label: 'Countries Served', value: '40+' },
    { icon: TrendingUp, label: 'Customer Satisfaction', value: '97%' }
  ];

  return (
    <div className="py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful implementations and partnerships with leading healthcare institutions worldwide
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-blue-600 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-200" />
                  </div>
                  <div className="text-white mb-2">{achievement.value}</div>
                  <div className="text-blue-200">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-gray-500">Installations</div>
                    <div className="text-gray-900">{project.stats.installations}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Satisfaction</div>
                    <div className="text-gray-900">{project.stats.satisfaction}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "MediTech's imaging solutions have transformed our diagnostic capabilities. The equipment is reliable and the support team is exceptional.",
                author: "Dr. Sarah Johnson",
                role: "Chief Radiologist, Metro General Hospital"
              },
              {
                quote: "The laboratory automation systems have significantly improved our efficiency and accuracy. A game-changer for our facility.",
                author: "Prof. Michael Chen",
                role: "Laboratory Director, University Medical Center"
              },
              {
                quote: "Outstanding surgical equipment with precision that our surgical team trusts. MediTech has been a valuable partner.",
                author: "Dr. Emily Rodriguez",
                role: "Head of Surgery, Regional Medical Complex"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
