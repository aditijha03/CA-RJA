import React from 'react';
import { ClientSlider } from '../components/common/ClientSlider';
import { NEW_CLIENTS_DATA } from '../constants/data';

export const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="bg-bg-base">
      <ClientSlider 
        title="Client Endorsements" 
        clients={NEW_CLIENTS_DATA}
        variant="card"
      />
    </div>
  );
};
