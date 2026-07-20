import { createContext } from 'react';
import type Lenis from 'lenis';

/**
 * Global context to share the Lenis smooth scroll instance.
 */
export const LenisContext = createContext<Lenis | null>(null);
