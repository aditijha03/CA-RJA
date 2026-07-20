import { useContext } from 'react';
import { LenisContext } from '../context/LenisContext';

/**
 * Custom hook to access the active Lenis smooth scroll instance.
 */
export const useLenis = () => {
  return useContext(LenisContext);
};
