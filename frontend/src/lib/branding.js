import fallbackLogo from "../assets/flex-hotel-logo.svg";
import flexHotelLogoFull from "../assets/53750813-0c79-491d-91d2-12d4b725dc68.png";
import flexHotelLogoTransparent from "../assets/53750813-0c79-491d-91d2-12d4b725dc68-removebg-preview.png";

export const flexHotelLogo = flexHotelLogoTransparent;
export const flexHotelLoginLogo = flexHotelLogoFull;

export function useFallbackLogo(event) {
  event.currentTarget.src = fallbackLogo;
}

